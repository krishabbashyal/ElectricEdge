import { SafeAreaView, View, Text, TouchableOpacity, Image, KeyboardAvoidingView, StyleSheet } from "react-native";
import React, { useState, useRef, useContext, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import CustomButton from "../../components/CustomButton";
import CustomInputField from "../../components/CustomInputField";
import { router } from "expo-router";
import { db } from "../../config/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";
import { UserContext } from "../../config/UserContext";
import * as ImagePicker from "expo-image-picker";
import { storage } from "../../config/firebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import "react-native-get-random-values";
import * as uuid from "uuid";
import { Platform } from "react-native";
import { updateProfile } from "firebase/auth";

const editProfile = () => {
  const { currentUser } = useContext(UserContext);
  const [profilePicture, setProfilePicture] = useState(currentUser.photoURL);

  const [formData, setFormData] = useState({
    displayName: "",
    phoneNumber: "",
  });

  useEffect(() => {
    const getDisplayName = async () => {
      const profileRef = doc(db, "profiles", currentUser.uid);
      const profileSnap = await getDoc(profileRef);

      if (profileSnap.exists()) {
        const profileData = profileSnap.data();
        setFormData((prevData) => ({
          ...prevData,
          displayName: profileData.display_name,
          phoneNumber: profileData.phone_number,
        }));
      }
    };
    getDisplayName();
  }, []);

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

  const displayNameRef = useRef(null);
  const phoneNumberRef = useRef(null);

  const handleDisplayNameChange = (displayName) => {
    setFormData({ ...formData, displayName });
  };

  const handlePhoneNumberChange = (phoneNumber) => {
    setFormData({ ...formData, phoneNumber });
  };

  const sendDataToFirebase = async (displayName, phoneNumber, currentUser) => {
    await updateDoc(doc(db, "profiles", currentUser.uid), {
      display_name: displayName,
      phone_number: phoneNumber,
      date_created: Timestamp.fromDate(new Date()),
    });
  };

  async function uploadImageAsync(uri) {
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
      console.log("MADE IT TO HERE");
    });

    const profilePictureRef = ref(storage, `profile_pictures/${uuid.v4()}`);
    const result = await uploadBytesResumable(profilePictureRef, blob);
    blob.close();

    return await getDownloadURL(profilePictureRef);
  }

  const handleSubmit = async () => {
    try {
      const downloadURL = await uploadImageAsync(profilePicture);
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

    const displayNameValid = displayNameRef.current.validate();
    const phoneNumberValid = phoneNumberRef.current.validate();

    if (displayNameValid && phoneNumberValid) {
      sendDataToFirebase(formData.displayName, formData.phoneNumber, currentUser);
      router.replace("profile");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        <View className="mx-8">
          <View className="mt-16">
            <Text className="text-3xl font-semibold">Edit profile</Text>
          </View>
          <View className="mt-2">
            <Text className="text-base">The information you share will be used across ElectricEdge to help charger hosts get to know you.</Text>
          </View>
          <View className="flex items-center mt-4 shadow-lg border-b pb-6 border-gray-300 shadow-gray-400">
            <TouchableOpacity onPress={selectProfilePicture}>
              {profilePicture ? (
                <Image className="w-[256px] h-[256px] rounded-full border-2 border-slate-700" source={{ uri: profilePicture }} />
              ) : (
                <Image className="w-[256px] h-[256px] rounded-full border-2 border-slate-700" source={require("../../assets/images/profilePicture.png")} />
              )}
              <View className="absolute ml-[196px] mt-[200px] h-11 w-11 items-center justify-center rounded-2xl bg-gray-700">
                <Feather name="upload" size={28} color="white" />
              </View>
            </TouchableOpacity>
          </View>
          <View className="mt-2">
            <CustomInputField
              ref={displayNameRef}
              label="Display Name"
              placeholder="Display Name"
              payload={formData.displayName}
              validationType="String"
              errorMessage="Display name must be at least 3 characters"
              preventSpaces={true}
              sendDataToParent={handleDisplayNameChange}
              customStyles="mt-2"
              defaultValue={formData.displayName}
              backgroundColor="bg-[#F2F2F2]"
            />
            <CustomInputField
              ref={phoneNumberRef}
              label="Phone Number"
              placeholder="Phone Number"
              payload={formData.phoneNumber}
              validationType="PhoneNumber"
              errorMessage="Please enter a valid phone number"
              preventSpaces={true}
              numericOnly={true}
              sendDataToParent={handlePhoneNumberChange}
              customStyles="pb-2"
              defaultValue={formData.phoneNumber}
              backgroundColor="bg-[#F2F2F2]"
            />
          </View>
          <View className="flex flex-row justify-between mt-">
            <CustomButton title="Go Back" buttonStyles="w-44 bg-slate-700" textStyles="text-white" handlePress={() => router.replace("/profile")} />
            <CustomButton title="Save Information" buttonStyles="bg-EE-Green w-44" textStyles="text-white" handlePress={() => handleSubmit(profilePicture)} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default editProfile;
