import React from "react";
import { View, Text } from "react-native";
const EmptySection = ({ subHeader, descriptionText }) => {
  return (
    <View>
      <Text className="mt-4 text-xl font-semibold">{subHeader}</Text>
      <Text className="text-base mt-1">{descriptionText}</Text>
    </View>
  );
};

export default EmptySection;
