import { View, Text, Image, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import ElectricEdgeHeader from "../../components/ElectricEdgeHeader";
import { router } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { storage } from "../../config/firebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { UserContext } from "../../config/UserContext";
import "react-native-get-random-values";
import * as uuid from "uuid";
import { updateProfile } from "firebase/auth";
import { Feather } from "@expo/vector-icons";

const ProfilePictureSetup = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const { currentUser } = useContext(UserContext);


  const selectProfilePicture = async () => {
    let userProfilePicture = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!userProfilePicture.canceled && userProfilePicture.assets) {
      setProfilePicture(userProfilePicture.assets[0].uri);
    }
  };

  async function uploadImageAsync(uri) {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
  
    const profilePictureRef = ref(storage, `profile_pictures/${uuid.v4()}`);
    const result = await uploadBytesResumable(profilePictureRef, blob);
    blob.close();
  
    return await getDownloadURL(profilePictureRef);
  }

  const handleSubmit = async () => {
    try {
      const downloadURL = await uploadImageAsync(profilePicture)
      try {
        await updateProfile(currentUser, {
          photoURL: downloadURL,
        });
      } catch (error) {
        console.error("Unable to update user's profile picture on firebase", error);
      }
    } catch (error) {
      console.error("Error uploading profile picture:", error);
    }
    router.replace("/explore");
  };

  return (
    <SafeAreaView>
      <View>
        <ElectricEdgeHeader customStyles="mt-8" />
        <View className="mx-8">
          <Text className="font-bold text-3xl max-w-lg">Would you like to add a profile picture?</Text>
          <Text className="mb-4 text-gray-700 mt-2 text-[17px]">Don't worry, you can always come back and do this later.</Text>
          <View className="flex items-center">
            <TouchableOpacity onPress={selectProfilePicture}>
              {profilePicture ? (
                <Image className="w-[350px] h-[350px] rounded-full border-[3px] border-slate-700" source={{ uri: profilePicture }} />
              ) : (
                <Image className="w-[350px] h-[350px] rounded-full border-[3px] border-slate-700" source={require("../../assets/images/profilePicture.png")} />
              )}
              <View className="absolute ml-64 mt-72 h-12 w-12 items-center justify-center rounded-2xl bg-gray-700">
                <Feather name="upload" size={30} color="white" />
              </View>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row justify-between mt-12">
            <CustomButton title="Setup Later" buttonStyles="w-44 bg-slate-700" textStyles="text-white" handlePress={() => router.replace("/explore")} />
            <CustomButton title="Continue" buttonStyles="bg-EE-Green w-44" textStyles="text-white" handlePress={() => handleSubmit(profilePicture)} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfilePictureSetup;
