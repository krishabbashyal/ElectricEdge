import { View, Text, Image, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import ElectricEdgeHeader from "../../components/ElectricEdgeHeader";
import { router } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { storage } from "../../config/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { UserContext } from "../../config/UserContext";

const profilePictureSetup = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const { currentUser } = useContext(UserContext);

  const selectProfilePicture = async () => {
    let userProfilePicture = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(userProfilePicture.assets[0].uri);

    if (!userProfilePicture.canceled && userProfilePicture.assets) {
      setProfilePicture(userProfilePicture.assets[0].uri);
    }
  };

  const handleSubmit = async (uri) => {
    // Why are we using XMLHttpRequest? See:
    // https://github.com/expo/expo/issues/2402#issuecomment-443726662
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
    try {
      const profilePictureRef = ref(storage, `profile_pictures/${currentUser.uid}`);
      const result = await uploadBytes(profilePictureRef, profilePicture.assets[0].uri);
      console.log(result)
      console.log("Profile Picture Uploaded")
      blob.close()
      return await getDownloadURL(profilePictureRef)

    } catch(error) {
      console.error("Error uploading profile picture:", error);
    }
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
              <View className="absolute ml-56 mt-72 rounded-xl bg-emerald-700">
                <Text className="text-green-200 px-2 py-3">Upload Image</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row justify-between mt-12">
            <CustomButton title="Setup Later" buttonStyles="w-44 bg-slate-700" textStyles="text-white" handlePress={() => router.push("/explore")} />
            <CustomButton title="Continue" buttonStyles="bg-EE-Green w-44" textStyles="text-white" handlePress={() => handleSubmit(profilePicture)} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default profilePictureSetup;
