import { SafeAreaView, View, Text } from "react-native";
import React, { useRef, useState, useContext } from "react";
import ElectricEdgeHeader from "../../components/ElectricEdgeHeader";
import CustomInputField from "../../components/CustomInputField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
import { auth } from "../../config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { router } from "expo-router";
import AlertBanner from "../../components/AlertBanner";
import { UserContext } from "../../config/UserContext";
import { UserProfileContext } from "../../config/UserProfileContext";

const logIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { currentUser } = useContext(UserContext);
  const { userData } = useContext(UserProfileContext);

  const [serverMessage, setServerMessage] = useState("");

  const emailFieldRef = useRef(null);
  const passwordFieldRef = useRef(null);

  const handleEmailChange = (email) => {
    setFormData({ ...formData, email });
  };

  const handlePasswordChange = (password) => {
    setFormData({ ...formData, password });
  };

  const handleRedirect = () => {

    if (!userData && currentUser) {
      router.replace("/profileSetup");
    }

    if (currentUser && userData) {
      router.replace("/explore");
    }
  };

  const submitForm = async () => {
    setServerMessage("");
    const emailValid = emailFieldRef.current.validate();
    const passwordValid = passwordFieldRef.current.validate();

    if (emailValid && passwordValid) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
        handleRedirect()
      } catch (error) {
        setServerMessage(error.message);

      }
    }
  };

  return (
    <SafeAreaView>
      <ElectricEdgeHeader customStyles="mt-8" />
      <View className="mx-6">
        <Text className="mb-4 font-medium text-2xl">Log in to ElectricEdge</Text>
        {serverMessage ? <AlertBanner serverMessage={serverMessage} /> : ""}
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
