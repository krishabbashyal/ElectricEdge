import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

const Bookings = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View className="mx-8">
        <View className="mt-16">
          <Text className="text-3xl font-semibold">Confirmed bookings</Text>
        </View>
        <Text className="mt-4 text-xl font-semibold">No bookings have been made...yet!</Text>
        <Text className="text-base mt-1">Don't get caught on the road with a dead car, find a charger for your next trip.</Text>
        <CustomButton title="Start exploring" buttonStyles="w-40 h-12 bg-gray-900 mt-4" textStyles="text-white text-base" handlePress={() => router.push("/explore")} />
      </View>
    </SafeAreaView>
  );
};

export default Bookings;
