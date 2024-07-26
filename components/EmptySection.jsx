import React from "react";
import { View, Text } from "react-native";
const EmptySection = ({ sectionTitle, subHeader, descriptionText }) => {
  return (
    <View>
      <View className="mt-16">
        <Text className="text-3xl font-semibold">{sectionTitle}</Text>
      </View>
      <Text className="mt-4 text-xl font-semibold">{subHeader}</Text>
      <Text className="text-base mt-1">{descriptionText}</Text>
    </View>
  );
};

export default EmptySection;
