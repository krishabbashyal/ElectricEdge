import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { router } from "expo-router";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";

const ElectricEdge = () => {
  return (
    <SafeAreaView className="bg-elecDark h-full">
      <View className="justify-center h-full">
        <Text className="text-2xl text-white text-center mx-4 font-medium">
          Charge Smarter, Drive Further, Enhance Your Journey with <Text className="text-elecGold font-extrabold">ElectricEdge</Text>
        </Text>
        <CustomButton title="Get Started" buttonStyles="mt-6 mx-4" handlePress={() => router.push("/explore")} />
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default ElectricEdge;
