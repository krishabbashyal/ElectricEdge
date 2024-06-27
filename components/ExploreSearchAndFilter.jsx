import { View, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const ExploreSearchAndFilter = () => {
  const [searchData, setsearchData] = useState("");

  const handleFilterClick = () => {
  
  };

  return (
    <View className="px-6 mt-2">
      <View className="flex-row items-center w-full">
        <View className="flex-row items-center bg-white rounded-full flex-1 shadow-md border border-slate-100">
          <AntDesign name="search1" size={24} color="black" style={{ marginLeft: 16 }} />
          <TextInput className="h-14 mx-4 placeholder:font-semibold w-4/5" placeholder="Where to?" placeholderTextColor="black" onChangeText={e => setsearchData(e)} value={searchData}/>
          {/* This w-4/5 that is being used for the TextInput may not be ideal, but it is working for now - Might need to revisit for other mobile screens */}
        </View>
        <TouchableOpacity onPress={() => handleFilterClick()}>
          <View className="ml-2 border border-black rounded-full p-2">
            <AntDesign name="filter" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ExploreSearchAndFilter;
