import React, { useState, useContext } from "react";
import { View, Text, Image } from "react-native";
import { auth } from "../config/firebaseConfig";
import { MaterialIcons } from "@expo/vector-icons";
import { UserContext } from "../config/UserContext"

const ProfileCard = () => {
  const { currentUser } = useContext(UserContext)

  return (
    <View className="flex-row items-center pb-4 justify-between mt-9 border-b border-gray-300 h-20">
      <View className="flex-row items-center">
        <Image className="w-14 h-14 rounded-full" source={require(".././assets/images/profilePicture.png")} />
        <View className="w-[256px]">
          <Text className="text-lg ml-4">{currentUser ? currentUser.email : "No User"}</Text>
          <Text className="ml-4 text-slate-500">Show Profile</Text>
        </View>
      </View>
      <View className="mt-3">
        <MaterialIcons name="arrow-forward-ios" size={18} color="black" />
      </View>
    </View>
  );
};

export default ProfileCard;
