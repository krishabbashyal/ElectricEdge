import { SafeAreaView, View, Text } from "react-native";
import React, { useState, useRef, useContext, useEffect } from "react";

import CustomButton from "../../components/CustomButton";
import CustomInputField from "../../components/CustomInputField";
import { router } from "expo-router";
import { db } from "../../config/firebaseConfig";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";
import { UserContext } from "../../config/UserContext";

const editProfile = () => {
  const { currentUser } = useContext(UserContext);
  
  const [formData, setFormData] = useState({
    displayName: "",
    phoneNumber: ""

  });

  
  useEffect(() => {
    const getDisplayName = async () => {
      const profileRef = doc(db, "profiles", currentUser.uid);
      const profileSnap = await getDoc(profileRef);
    
      if (profileSnap.exists()){
        const profileData = profileSnap.data();
        setFormData(prevData => ({
          ...prevData,
          displayName: profileData.display_name,
          phoneNumber: profileData.phone_number
        }));
      }
    }
    getDisplayName();
  }, []);

  useEffect(() => {
    console.log(formData.displayName, formData.phoneNumber)
  }, [formData])
  

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

  const submitForm = async () => {
    const displayNameValid = displayNameRef.current.validate();
    const phoneNumberValid = phoneNumberRef.current.validate();

    if (displayNameValid && phoneNumberValid) {
      sendDataToFirebase(formData.displayName, formData.phoneNumber, currentUser);
      router.push("profile");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View>

        <View className="mx-8">
        <View className="mt-16">
          <Text className="text-3xl font-semibold">Edit profile</Text>
        </View>
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
            defaultValue = {formData.displayName}
            backgroundColor = "bg-[#F2F2F2]"
            
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
            defaultValue = {formData.phoneNumber}
            backgroundColor = "bg-[#F2F2F2]"
            
          />

          <CustomButton title="Save information" buttonStyles="bg-EE-Green mt-8" textStyles="text-white" handlePress={submitForm} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default editProfile;
