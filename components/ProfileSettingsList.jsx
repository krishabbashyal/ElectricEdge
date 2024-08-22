import { View, Text } from "react-native";
import React from "react";
import SignOutButton from "./SignOutButton";
import ProfileSettingsTab from "./ProfileSettingsTab";


const ProfileSettingsList = () => {
  return (
    <View>
      <View className="mt-8 mb-2">
        <Text className="text-[22px] font-medium">Project links</Text>
      </View>
      <View className="w-full">
        <ProfileSettingsTab iconName="github" text="View source code" linkURL={"https://github.com/krishabbashyal"} />
        <ProfileSettingsTab iconName="linkedin" text="Developer linkedIn" linkURL={"https://www.linkedin.com/in/krishabbashyal"}/>
        <ProfileSettingsTab iconName="mail" text="Contact me" linkURL={"mailto:krishabbashyal@gmail.com"} />
      </View>
      <View className="mt-8">
        <Text className="text-[22px] font-medium mb-1">Profile and settings</Text>
        <ProfileSettingsTab iconName="battery-charging" size={24} text="Previous bookings" linkURL={"mailto:krishabbashyal@gmail.com"} />
        <SignOutButton />
      </View>
    </View>
  );
};

export default ProfileSettingsList;
