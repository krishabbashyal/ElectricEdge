import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";


const ProfileSettingsTab = ({ iconName, text }) => {
  return (
    <View className="border-b py-2.5 border-gray-300">
      <TouchableOpacity className="flex-row">
        <Feather name={iconName} size={22} color="black" />
        <Text className="ml-4 text-base">{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileSettingsTab;
