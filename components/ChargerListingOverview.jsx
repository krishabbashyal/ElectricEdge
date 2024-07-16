import { View, Text } from "react-native";
import React from "react";

const ChargerListingOverview = ({chargerType, city, state}) => {
  return (
    <View>
      <Text className="text-2xl font-bold mt-4">{chargerType}</Text>
      <View className="flex flex-row">
        <Text className="text-lg font-medium">
          Charging station in{" "}
          <Text className="font-bold text-EE-Green">
            {city}, {state}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default ChargerListingOverview;
