import { SafeAreaView, View, Text } from "react-native";
import React from "react";
import { useState, useRef } from "react";
import { Link } from "expo-router";
import ElectricEdgeHeader from "../../components/ElectricEdgeHeader";
import CustomButton from "../../components/CustomButton";
import CustomInputField from "../../components/CustomInputField";

const profileSetup = () => {
  const [formData, setFormData] = useState({
    displayName: "",
  });

  const [formattedDisplayName, setFormattedDisplayName] = useState("")

  const displayNameRef = useRef(null);

  const handleDisplayNameChange = (displayName) => {
    setFormData({ ...formData, displayName });
    if (displayName.length == 0){
    setFormattedDisplayName("");
      
    } else {
    setFormattedDisplayName(` ${displayName}`);
    }
  };

  const submitForm = async () => {
    const displayNameValid = displayNameRef.current.validate()
  }

  return (
    <SafeAreaView>
      <ElectricEdgeHeader customStyles="mt-8" />
      <View className="mx-8">
        <Text className="font-bold text-4xl max-w-lg">Hello{ formattedDisplayName}, It is nice to meet you. 👋 </Text>
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

        

      

        <CustomButton title="Continue" buttonStyles="bg-EE-Green mt-4" textStyles="text-white" handlePress={submitForm} />
      </View>
    </SafeAreaView>
  );
};

export default profileSetup;
