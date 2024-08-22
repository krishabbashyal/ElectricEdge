import { View, Text } from "react-native";
import React from "react";

const PricingDetails = ({bookingDuration, hourlyRate}) => {
  return (
    <View className="pt-2 flex flex-col gap-1.5">
      <View className="flex flex-row justify-between">
        <Text className="text-base">${hourlyRate} x {bookingDuration} hour(s)</Text>
        <Text className="text-base">${(bookingDuration * hourlyRate).toFixed(2)}</Text>
      </View>
      <View className="flex flex-row justify-between">
        <Text className="text-base">Platform fee</Text>
        <Text className="text-base">$5.00</Text>
      </View>
      <View className="flex flex-row justify-between border-t border-gray-300 pt-2 pb-2">
        <Text className="text-base font-semibold">Total price</Text>
        <Text className="text-base font-semibold">${(bookingDuration * hourlyRate + 5).toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default PricingDetails;
