import React from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import { router } from "expo-router";
import CustomButton from "../components/CustomButton";
import ElectricEdgeHeader from "../components/ElectricEdgeHeader";
import { StatusBar } from "expo-status-bar";

const ElectricEdge = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="justify-center flex-1">
        <ElectricEdgeHeader />
        <Image className="w-full h-96" source={require("../assets/images/heroImage.png")} />
        <Text className="text-2xl text-center mx-6 font-medium">Charge Smarter, Drive Further, Enhance Your Journey.</Text>
        <CustomButton title="Get Started" textStyles="text-white" buttonStyles="mt-6 mx-6 bg-EE-Green" handlePress={() => router.push("/signUp")} />
        <CustomButton title="Explore Page" textStyles="text-white text-xs font-medium" buttonStyles="mt-6 h-7 mx-6 bg-orange-400" handlePress={() => router.push("/explore")} />
        <CustomButton title="Onboarding Page" textStyles="text-white text-xs font-medium" buttonStyles="mt-2 h-7 mx-6 bg-blue-500" handlePress={() => router.push("/profileSetup")} />

      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default ElectricEdge;
