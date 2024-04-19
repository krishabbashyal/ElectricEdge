import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ title, buttonStyles, handlePress, textStyles }) => {
  return (
    <TouchableOpacity className={`bg-elecGold rounded-xl min-h-[56px] justify-center items-center ${buttonStyles}`} onPress={handlePress} activeOpacity={0.7}>
      <Text className={`font-bold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
