import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import React, { useState, useRef } from "react";
import Checkbox from "expo-checkbox";
import ElectricEdgeHeader from "../../components/ElectricEdgeHeader";
import CustomButton from "../../components/CustomButton";
import CustomInputField from "../../components/CustomInputField";

const ProfileSetup = () => {
  const [formData, setFormData] = useState({
    displayName: "",
    phoneNumber: "",
    agreedToTerms: false,
  });

  const [formattedDisplayName, setFormattedDisplayName] = useState("");
  const [checkboxError, setCheckboxError] = useState(false);
  const [formStep, setFormStep] = useState("");

  const displayNameRef = useRef(null);
  const phoneNumberRef = useRef(null);

  const handleDisplayNameChange = (displayName) => {
    setFormData({ ...formData, displayName });
    if (displayName.length === 0) {
      setFormattedDisplayName("");
    } else {
      setFormattedDisplayName(` ${displayName}`);
    }
  };

  const handlePhoneNumberChange = (phoneNumber) => {
    setFormData({ ...formData, phoneNumber });
  };

  const handleAgreedToTermsChange = () => {
    setFormData({ ...formData, agreedToTerms: !formData.agreedToTerms });
  };

  const getCheckboxValue = (checkboxValue) => {
    setCheckboxError(!checkboxValue);
    return checkboxValue;
  };

  const submitForm = async () => {
    const displayNameValid = displayNameRef.current.validate();
    const phoneNumberValid = phoneNumberRef.current.validate();
    const termsAgreed = getCheckboxValue(formData.agreedToTerms);

    if (termsAgreed) {
      setCheckboxError(false);
    }

    if (displayNameValid && phoneNumberValid && termsAgreed) {
      console.log(`Display Name: ${formData.displayName}`);
      console.log(`Phone Number: ${formData.phoneNumber}`);
      console.log(`Terms Agreed: ${formData.agreedToTerms}`);
      setFormStep("profilePictureSetup");
    } else {
      console.log("Something does not look right, will not send to server");
      console.log(`Display Name: ${formData.displayName}`);
      console.log(`Phone Number: ${formData.phoneNumber}`);
      console.log(`Terms Agreed: ${formData.agreedToTerms}`);
      console.log(displayNameValid, phoneNumberValid, termsAgreed);
    }
  };

  const renderPage = () => {
    switch (formStep) {
      case "profilePictureSetup":
        return (
          <View>
            <ElectricEdgeHeader customStyles="mt-8" />
            <View className="mx-8">
              <Text className="font-bold text-3xl max-w-lg">Would you like to add a profile picture? </Text>
              <Text className="mb-4 text-gray-700 mt-2 text-[17px]">Don't worry, you can always come back and do this later.</Text>
              <View className="flex items-center">
                <Image className="w-[350px] h-[350px] rounded-full border-[3px] border-slate-700" source={require("../../assets/images/profilePicture.png")} />
              </View>
              <View className="flex flex-row justify-between mt-12">
                <CustomButton title="Go Back" buttonStyles="w-44 bg-slate-700" textStyles="text-white" handlePress={() => setFormStep("")} />
                <CustomButton title="Continue" buttonStyles="bg-EE-Green w-44" textStyles="text-white" handlePress={submitForm} />
              </View>
              <View className="flex items-center mt-14">
                <Text className="text-xl font-bold text-blue-400">Setup Later</Text>
              </View>
            </View>
          </View>
        );

      default:
        return (
          <View>
            <ElectricEdgeHeader customStyles="mt-8" />
            <View className="mx-8">
              <Text className="font-bold text-3xl max-w-lg">Hello{formattedDisplayName}, It is nice to meet you. 👋 </Text>
              <Text className="mb-4 text-gray-700 mt-2 text-[17px]">We just need a little more information before we can begin!</Text>
              <CustomInputField
                ref={displayNameRef}
                label="What should we call you?"
                placeholder="Display Name"
                payload={formData.displayName}
                validationType="String"
                errorMessage="Display name must be at least 3 characters"
                preventSpaces={true}
                sendDataToParent={handleDisplayNameChange}
                customStyles="mt-2"
              />
              <CustomInputField
                ref={phoneNumberRef}
                label="What is a good phone number?"
                placeholder="Phone Number"
                payload={formData.phoneNumber}
                validationType="PhoneNumber"
                errorMessage="Please enter a valid phone number"
                preventSpaces={true}
                numericOnly={true}
                sendDataToParent={handlePhoneNumberChange}
                customStyles="pb-2"
              />
              <View className="flex flex-row items-center pt-4 border-t border-gray-300">
                <Checkbox style={styles.checkbox} value={formData.agreedToTerms} onValueChange={handleAgreedToTermsChange} color={checkboxError ? "#BC6659" : "#3A8060"} />
                <Text className={checkboxError ? "ml-2 text-EE-Red" : "ml-2"}>I understand that this application is just a prototype</Text>
              </View>
              <CustomButton title="Continue" buttonStyles="bg-EE-Green mt-8" textStyles="text-white" handlePress={submitForm} />
            </View>
          </View>
        );
    }
  };

  return <SafeAreaView>{renderPage()}</SafeAreaView>;
};

const styles = StyleSheet.create({
  checkbox: {
    height: 22,
    width: 22,
    borderRadius: 6,
  },
});

export default ProfileSetup;
