import { SafeAreaView, View, Text } from "react-native";
import React, { useRef, useState } from "react";
import ElectricEdgeHeader from "../../components/ElectricEdgeHeader";
import CustomInputField from "../../components/CustomInputField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
import { auth } from "../../config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { router } from "expo-router";

const logIn = () => {
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

  const submitForm = async () => {
    const emailValid = emailFieldRef.current.validate();
    const passwordValid = passwordFieldRef.current.validate();

    if (emailValid && passwordValid) {
      // need to add try catch here to handle errors
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password)
      console.log("Log In Form Data: ", formData);
      console.log(userCredential)
      router.push("/explore")
    }
  };

  return (
    <SafeAreaView>
      <ElectricEdgeHeader customStyles="mt-8" />
      <View className="mx-8">
        <Text className="mb-4 font-medium text-xl">Log in to ElectricEdge</Text>
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
        <CustomButton title="Log In" buttonStyles="bg-EE-Green mt-4" textStyles="text-white" handlePress={submitForm} />
      </View>
      <View className="flex-row justify-center mt-3">
        <Text>Don't have an account?</Text>
        <Link className="ml-1" href={"/signUp"}>
          <Text className="font-bold text-EE-Green">Sign Up</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default logIn;
