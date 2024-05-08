import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import { auth } from "../config/firebaseConfig";
import { MaterialIcons } from "@expo/vector-icons";

const ProfileCard = () => {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserEmail(user.email);
    } else {
      setUserEmail("No user logged in");
    }
  }, []);

  return (
    <SafeAreaView>
      
        <View className="flex-row items-center pb-4 justify-between mt-9 border-b border-gray-300 h-20">
          <View className="flex-row items-center">
            <Image className="w-14 h-14 rounded-full border border-slate-400" source={require(".././assets/images/profilePicture.png")} />
            <View className="w-[256px]">
              <Text className="text-lg ml-4">{userEmail}</Text>
              <Text className="ml-4 text-slate-500">Show Profile</Text>
            </View>
          </View>
          <View className="mt-3">
            <MaterialIcons name="arrow-forward-ios" size={18} color="black" />
          </View>
        </View>
    </SafeAreaView>
  );
};

export default ProfileCard;
