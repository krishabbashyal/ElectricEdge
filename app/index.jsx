import { Text, View, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { Link } from "expo-router";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";

const ElectricEdge = () => {
  const logData = () => {
    console.log("Button Pressed")
  }
  return (
    <SafeAreaView className="bg-elecDark h-full">
      <View className="mt-96">
        <Text className="text-2xl text-white text-center mx-4 font-medium">
          Charge Smarter, Drive Further, Enhance Your Journey with <Text className="text-elecGold font-extrabold">ElectricEdge</Text>
        </Text>
        <CustomButton title="Get Started" handlePress={() => logData()} buttonStyles="mt-4 mx-4"/>
      </View>
      <StatusBar style="light"/>
    </SafeAreaView>

  
  );
};

export default ElectricEdge;
