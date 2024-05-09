import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { auth } from "../config/firebaseConfig";
import { signOut } from "firebase/auth";
import { router } from "expo-router";



const SignOutButton = () => {

  const handleUserSignOut = async () => {
    await signOut(auth)
    router.replace("/logIn")

  }

  return (
    <View className="border-b pb-4 border-gray-300">
      <TouchableOpacity className="flex-row" onPress={handleUserSignOut}>
        <SimpleLineIcons name="logout" size={20} color="red" />
        <Text className="ml-4 text-red-500 text-base">Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignOutButton;
