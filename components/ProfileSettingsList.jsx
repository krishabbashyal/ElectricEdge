import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import SignOutButton from "./SignOutButton";

const ProfileSettingsList = () => {
  return (
    <View>
      <View className="mt-8 mb-2">
        <Text className="text-[22px] font-medium">Project Links</Text>
      </View>
      {/* // View for the github icon */}
      <View className="border-b py-2.5 border-gray-300">
        <TouchableOpacity className="flex-row">
          <Feather name="github" size={22} color="black" />
          <Text className="ml-4 text-base">View Source Code</Text>
        </TouchableOpacity>
      </View>
      {/* // View for the linkedin icon */}
      <View className="border-b py-2.5 border-gray-300">
        <TouchableOpacity className="flex-row">
          <Feather name="linkedin" size={22} color="black" />
          <Text className="ml-4 text-base">Developer LinkedIn</Text>
        </TouchableOpacity>
      </View>
      {/* // View for something else */}
      <View className="border-b py-2.5 border-gray-300">
        <TouchableOpacity className="flex-row">
          <Feather name="mail" size={22} color="black" />
          <Text className="ml-4 text-base">Contant Me</Text>
        </TouchableOpacity>
      </View>

      <View className="mt-8">
        <Text className="text-[22px] font-medium">Profile and Settings</Text>
        <SignOutButton />
      </View>

    </View>
  );
};

export default ProfileSettingsList;
