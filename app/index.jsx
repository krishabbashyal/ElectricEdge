import React from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import { router } from "expo-router";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";

const ElectricEdge = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="justify-center flex-1">
        <View className="flex-row justify-center items-center gap-2 mb-12">
          <Image className="w-8 h-8" source={require("../assets/images/electricEdgeLogo.png")}/>
          <Text className="text-3xl font-semibold">ElectricEdge</Text>
        </View>
        <Image className="w-full h-96" source={require("../assets/images/heroImage.png")} />
        <Text className="text-2xl text-center mx-6 font-medium">Charge Smarter, Drive Further, Enhance Your Journey.</Text>
        <CustomButton title="Get Started" textStyles="text-white" buttonStyles="mt-6 mx-6 bg-[#3A8060]" handlePress={() => router.push("/explore")} />
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default ElectricEdge;
