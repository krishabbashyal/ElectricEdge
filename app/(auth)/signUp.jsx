import { SafeAreaView, View, Text } from "react-native";
import React, { useRef, useState } from "react";
import ElectricEdgeHeader from "../../components/ElectricEdgeHeader";
import CustomInputField from "../../components/CustomInputField";
import CustomButton from "../../components/CustomButton";

const signUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const emailFieldRef = useRef(null);
  const passwordFieldRef = useRef(null);

  const handleEmailChange = (email) => {
    setFormData({ ...formData, email });
  };

  const handlePasswordChange = (password) => {
    setFormData({ ...formData, password });
  };

  const submitForm = () => {
    const emailValid = emailFieldRef.current.validate();
    const passwordValid = passwordFieldRef.current.validate();

    if (emailValid && passwordValid) {
      // logic for handing a form submission
      console.log(formData)
    }
  };

  return (
    <SafeAreaView>
      <ElectricEdgeHeader customStyles="mt-8" />
      <View className="mx-8">
        <Text className="mb-4 font-medium text-xl">Sign up for ElectricEdge</Text>
        <CustomInputField
          ref={emailFieldRef}
          label="Email"
          placeholder="Email"
          payload={formData.email}
          errorMessage="Please enter a valid email address"
          validationType="Email"
          keyboardType="email-address"
          preventSpaces={true}
          sendDataToParent={handleEmailChange}
        />
        <CustomInputField
          ref={passwordFieldRef}
          label="Password"
          placeholder="Password"
          payload={formData.password}
          validationType="Password"
          errorMessage="Password must be at least 6 characters"
          preventSpaces={true}
          sendDataToParent={handlePasswordChange}
        />
        <CustomButton title="Sign Up" buttonStyles="bg-EE-Green mt-4" textStyles="text-white" handlePress={submitForm} />
      </View>
    </SafeAreaView>
  );
};

export default signUp;
