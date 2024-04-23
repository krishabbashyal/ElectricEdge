import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { router } from "expo-router";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";

const ElectricEdge = () => {
  return (
    <SafeAreaView className="flex-1 bg-elecDark">
      <View className="justify-center flex-1">
        <Text className="text-2xl  text-center mx-6 text-white font-medium">
          Charge Smarter, Drive Further, Enhance Your Journey with <Text className="text-elecGold font-extrabold">ElectricEdge</Text>
        </Text>
        <CustomButton title="Get Started" buttonStyles="mt-6 mx-6 bg-elecGold" handlePress={() => router.push("/explore")} />
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default ElectricEdge;
