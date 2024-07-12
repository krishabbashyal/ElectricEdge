import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { UserContext } from "../config/UserContext";
import { db } from "../config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { router } from "expo-router";

const ProfileCard = () => {
  const { currentUser } = useContext(UserContext);
  const [displayName, setDisplayName] = useState("...")

  const getDisplayName = async () => {
    const profileRef = doc(db, "profiles", currentUser.uid)
    const profileSnap = await getDoc(profileRef)

    if (profileSnap.exists()){
      console.log(profileSnap.data())
      setDisplayName(profileSnap.data().display_name)
    }
  }

  useEffect(() => {
    getDisplayName()
  }, [])

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
            <Text className="text-lg ml-4">{displayName}</Text>
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
