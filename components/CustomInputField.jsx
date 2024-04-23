import { View, TextInput } from "react-native";
import React from "react";

import { AntDesign } from "@expo/vector-icons";


const CustomInputField = ({ type, placeholder }) => {
  return (
    <View className="flex-row items-center bg-white rounded-full flex-1 shadow-md">
      <AntDesign name="search1" size={24} color="black" style={{ marginLeft: 16 }} />
      <TextInput className="h-14 mx-4 placeholder:font-medium w-4/5" placeholder={placeholder} type="Password" placeholderTextColor="black" />
      {/* This w-4/5 that is being used for the TextInput may not be ideal, but it is working for now - Might need to revisit for other mobile screens */}
    </View>
  );
};

export default CustomInputField;
