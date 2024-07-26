import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import EmptySection from "../../components/EmptySection";

const Bookings = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View className="mx-6">
      <View className="mt-16">
          <Text className="text-3xl font-semibold">Confirmed bookings</Text>
        </View>
        <EmptySection subHeader={"No bookings have been made...yet!"} descriptionText={"Don't get caught on the road with a dead car, find a charger for your next trip."} />
        <CustomButton title="Start exploring" buttonStyles="w-40 h-12 bg-gray-900 mt-4" textStyles="text-white text-base" handlePress={() => router.replace("/explore")} />
      </View>
    </SafeAreaView>
  );
};

export default Bookings;
