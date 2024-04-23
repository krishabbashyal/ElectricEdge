import { View, TextInput, } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

import CustomInputField from "./CustomInputField";

const ExploreSearchAndFilter = () => {

  return (
    <SafeAreaView className="px-6">
      <View className="flex-row items-center w-full">
        <CustomInputField placeholder="Where To?"/>
        <View className="ml-2 border border-black rounded-full p-2">
          <AntDesign name="filter" size={24} color="black" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ExploreSearchAndFilter;
