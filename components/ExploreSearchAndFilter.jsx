import { View, TextInput, } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

const ExploreSearchAndFilter = () => {
  return (
    <SafeAreaView className="px-6">
      <View className="flex-row items-center w-full">
        <View className="flex-row items-center bg-white rounded-full flex-1 shadow-md">
          <AntDesign name="search1" size={24} color="black" style={ {marginLeft: 16}} />
          <TextInput 
            className="h-14 mx-4 placeholder:font-medium" 
            placeholder="Where to?" 
            placeholderTextColor="black"
            
          />
        </View>
        <View className="ml-2 border border-black rounded-full p-2">
          <AntDesign name="filter" size={24} color="black" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ExploreSearchAndFilter;
