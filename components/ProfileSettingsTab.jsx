import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import * as Linking from 'expo-linking'


const ProfileSettingsTab = ({ iconName, text, linkURL }) => {
  return (
      <View className="border-b py-2.5 border-gray-300 w-full">
        <TouchableOpacity className="flex-row w-full" onPress={() => Linking.openURL(linkURL)}>
          <Feather name={iconName} size={22} color="black" />
          <Text className="ml-4 text-base">{text}</Text>
        </TouchableOpacity>
      </View>
  );
};

export default ProfileSettingsTab;
