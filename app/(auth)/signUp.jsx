import { SafeAreaView, View, Text } from "react-native";
import React, { useState } from "react";
import ElectricEdgeHeader from "../../components/ElectricEdgeHeader";
import CustomInputField from "../../components/CustomInputField";
import CustomButton from "../../components/CustomButton";

const signUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const submitForm = () => {
    console.log(formData);
  };

  return (
    <SafeAreaView>
      <ElectricEdgeHeader customStyles="mt-8" />
      <View className="mx-8">
        <Text className="mb-4 font-medium text-xl">Sign up for ElectricEdge</Text>
        <CustomInputField
          label="Email"
          placeholder="Email"
          payload={formData.email}
          handleTextChange={(e) => setFormData({ ...formData, email: e })}
          errorMessage="Please enter a valid email address"
          validationType="Email"
          keyboardType="email-address"
          preventSpaces={true}
        />
        <CustomInputField
          label="Password"
          placeholder="Password"
          payload={formData.password}
          handleTextChange={(e) => setFormData({ ...formData, password: e })}
          validationType="Password"
          errorMessage="Password must be at least 6 characters"
          preventSpaces={true}
        />
        <CustomButton title="Sign Up" buttonStyles="bg-EE-Green mt-4" textStyles="text-white" handlePress={() => submitForm()} />
      </View>
    </SafeAreaView>
  );
};

export default signUp;
