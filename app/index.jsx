import React, { useContext, useEffect } from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import { router } from "expo-router";
import CustomButton from "../components/CustomButton";
import ElectricEdgeHeader from "../components/ElectricEdgeHeader";
import { StatusBar } from "expo-status-bar";
import { UserContext } from "../config/UserContext"

const ElectricEdge = () => {
  const { currentUser } = useContext(UserContext)


  // useEffect(() => {
  //   checkForUser()
  // }, [])


  // TODO: Replace these pushes to replaces once applicaiton is ready
  const checkForUser = () => {
    if (currentUser) {
      router.push('explore')
    }
  }

  const handleButtonClick = () => {
    if (currentUser) {
      router.push('explore')
    } else {
      router.push('signUp')
    }
  }

  // checkForUser()

  return (
    <SafeAreaView className="flex-1">
      <View className="justify-center flex-1">
        <ElectricEdgeHeader />
        <Image className="w-full h-96" source={require("../assets/images/heroImage.png")} />
        <Text className="text-2xl text-center mx-6 font-medium">Charge Smarter, Drive Further, Enhance Your Journey.</Text>
        <CustomButton title="Get Started" textStyles="text-white" buttonStyles="mt-6 mx-6 bg-EE-Green" handlePress={handleButtonClick} />
        <View className="flex flex-row justify-evenly mt-5 w-full">
          <CustomButton title="Explore Page" textStyles="text-xs font-medium" buttonStyles="h-7 w-32 bg-gray-300" handlePress={() => router.replace("/explore")} />
          <CustomButton title="Profile Picture Page" textStyles="text-xs font-medium" buttonStyles="h-7 w-32 bg-gray-300" handlePress={() => router.replace("/profilePictureSetup")} />
          <CustomButton title="Edit Profile Page" textStyles="text-xs font-medium" buttonStyles="h-7 w-32 bg-gray-300" handlePress={() => router.replace("/profile/editProfile")} />
          <CustomButton title="List Charger Page" textStyles="text-xs font-medium" buttonStyles="h-7 w-32 bg-gray-300" handlePress={() => router.replace("/profile/chargerListing")} />

        </View>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default ElectricEdge;
