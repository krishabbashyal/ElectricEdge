import { View, Text } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import SignOutButton from "./SignOutButton";
import ProfileSettingsTab from "./ProfileSettingsTab"

const ProfileSettingsList = () => {
  return (
    <View>
      <View className="mt-8 mb-2">
        <Text className="text-[22px] font-medium">Project Links</Text>
      </View>

      <ProfileSettingsTab iconName="github" text="View Source Code"/>
      <ProfileSettingsTab iconName="linkedin" text="Developer LinkedIn"/>
      <ProfileSettingsTab iconName="mail" text="Contact Me"/>

      <View className="mt-8">
        <Text className="text-[22px] font-medium">Profile and Settings</Text>
        <SignOutButton />
      </View>

    </View>
  );
};

export default ProfileSettingsList;
