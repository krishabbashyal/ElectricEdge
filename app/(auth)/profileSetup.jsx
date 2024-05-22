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

  const displayNameRef = useRef(null);

  const handleDisplayNameChange = (displayName) => {
    setFormData({ ...formData, displayName });
  };

  const submitForm = async () => {
    const displayNameValid = displayNameRef.current.validate()
  }

  return (
    <SafeAreaView>
      <ElectricEdgeHeader customStyles="mt-8" />
      <View className="mx-8">
        <Text className="font-medium text-xl">Hello, It is nice to meet you.</Text>
        <Text className="mb-4 text-gray-700">We need just a little more information about to before we can begin!</Text>

        <CustomInputField
          ref={displayNameRef}
          label="What should we call you?"
          placeholder="Display Name"
          payload={formData.displayName}
          validationType="String"
          errorMessage="Display name must be at least 3 characters"
          preventSpaces={true}
          sendDataToParent={handleDisplayNameChange}

        />
        <CustomButton title="Continue" buttonStyles="bg-EE-Green mt-4" textStyles="text-white" handlePress={submitForm} />
      </View>
    </SafeAreaView>
  );
};

export default profileSetup;
