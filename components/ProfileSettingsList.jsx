import { View, Text } from "react-native";
import React from "react";
import SignOutButton from "./SignOutButton";

const ProfileSettingsList = () => {
  return (
    <View>
      <View className="mt-8">
        <Text className="text-[22px] font-medium">Settings</Text>
      </View>
      <View className="mt-6">
        <SignOutButton/>
      </View>
    </View>
  );
};

export default ProfileSettingsList;
