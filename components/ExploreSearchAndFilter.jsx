import { View, TextInput, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

const ExploreSearchAndFilter = () => {
  return (
    <SafeAreaView className="px-6">
      <View className="flex-row justify-between items-center w-full">
        <View className="bg-white h-14 flex-row items-center justify-center rounded-full">
          <AntDesign className="" name="search1" size={24} color="black" />
          <TextInput className="w-full" placeholder="Where To?" />
        </View>
        <View className="ml-4 border border-black rounded-full items-center p-2">
          <AntDesign name="filter" size={24} color="black" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ExploreSearchAndFilter;
