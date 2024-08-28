import React, { useContext, useEffect } from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import { router } from "expo-router";
import CustomButton from "../components/CustomButton";
import ElectricEdgeHeader from "../components/ElectricEdgeHeader";
import { StatusBar } from "expo-status-bar";
import { UserContext } from "../config/UserContext";
import { UserProfileContext } from "../config/UserProfileContext";
import SignOutButton from "../components/SignOutButton";

const ElectricEdge = () => {
  const { currentUser } = useContext(UserContext);
  const { userData } = useContext(UserProfileContext);

  // TODO: Uncomment these lines once application is completed

  // useEffect(() => {
  //   if (currentUser && userData) {
  //     router.replace("/explore");
  //   }
  // })

  const handleRedirect = () => {
    if (!currentUser) {
      router.replace("/signUp");
    }

    if (!userData && currentUser) {
      router.replace("/profileSetup");
    }

    if (currentUser && userData) {
      router.replace("/explore");
    }
  };

  // checkForUser()

  return (
    <SafeAreaView className="flex-1">
      <View className="justify-center flex-1">
        <ElectricEdgeHeader />
        <Image className="w-full h-96" source={require("../assets/images/heroImage.png")} />
        <Text className="text-2xl text-center mx-6 font-medium">Charge Smarter, Drive Further, Enhance Your Journey.</Text>
        <CustomButton title="Get Started" textStyles="text-white" buttonStyles="mt-6 mx-6 bg-EE-Green" handlePress={handleRedirect} />
        <SignOutButton/>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default ElectricEdge;
