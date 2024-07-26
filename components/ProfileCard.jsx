import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { UserContext } from "../config/UserContext";
import { UserProfileContext } from "../config/UserProfileContext";
import { router } from "expo-router";

const ProfileCard = () => {
  const { currentUser } = useContext(UserContext);
  const { userData } = useContext(UserProfileContext)

  return (
    <View className="border-b border-gray-300">
      <TouchableOpacity className="flex-row items-center pb-4 justify-between mt-9 h-20" onPress={() => router.push("/profile/editProfile")}>
        <View className="flex-row items-center">
          {currentUser && currentUser.photoURL ? (
            <Image
              className="w-16 h-16 rounded-full"
              source={{ uri: currentUser.photoURL }}
            />
          ) : (
            <Image className="w-16 h-16 rounded-full" source={require(".././assets/images/profilePicture.png")} />
          )}
          <View className="w-[256px]">
            <Text className="text-lg ml-4">{userData.display_name}</Text>
            <Text className="ml-4 text-slate-500">Edit Profile</Text>
          </View>
        </View>
        <View className="mt-3">
          <MaterialIcons name="arrow-forward-ios" size={18} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileCard;
