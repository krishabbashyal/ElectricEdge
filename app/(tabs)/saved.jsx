import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import CustomButton from "../../components/CustomButton"
import { router } from "expo-router";

const Saved = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View className="mx-8">
        <View className="mt-16">
          <Text className="text-3xl font-semibold">Saved for later</Text>
        </View>
        <Text className="mt-4 text-xl font-semibold">Bummer, no chargers saved.</Text>
        <Text className="text-base mt-1">Chargers that you've saved for later will appear here.</Text>
        <CustomButton title="Start exploring" buttonStyles="w-40 h-12 bg-gray-900 mt-4" textStyles="text-white text-base" handlePress={() => router.replace("/explore")} />
      </View>
    </SafeAreaView>
  );
};

export default Saved;
