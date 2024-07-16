import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const ChargerCheckInMethod = ({ allowSelfCheckIn }) => {
  return (
    <View className="border-t border-gray-300  mt-3 pt-3">
      <View className="flex flex-row items-center">
        <View className="bg-white p-2 rounded-full border">
          <AntDesign name={allowSelfCheckIn ? "check" : "close"} size={30} color="black" />
        </View>
        <View>
          <Text className="ml-4 font-medium text-base">{ allowSelfCheckIn ? "Self check-in" : "No self check-in"}</Text>
          <Text className="ml-4 -mt-0.5 text-sm text-gray-500">{ allowSelfCheckIn ? "Check-in using a keypad or other method" : "Contact host when ready to check-in"}</Text>
        </View>
      </View>
    </View>
  );
};

export default ChargerCheckInMethod;
