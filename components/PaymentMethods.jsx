import { View, Text } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const PaymentMethods = () => {
  return (
    <View className="mt-2">
      <View className="border p-4 rounded-xl border-gray-400  flex flex-row items-center mb-2">
        <FontAwesome name="paypal" size={24} color="black" />
        <Text className="ml-4 text-base">PayPal</Text>
      </View>
      <View className="border p-4 rounded-xl border-gray-400  flex flex-row items-center mb-2">
        <FontAwesome name="cc-discover" size={24} color="black" />
        <View className="flex flex-row items-center ml-4">
          <Text className="text-[9px]">&#9679;&#9679;&#9679;&#9679;</Text>
          <Text className="ml-1 text-base">8542</Text>
        </View>
      </View>
      <View className="border p-4 rounded-xl border-gray-400  flex flex-row items-center mb-2">
        <FontAwesome name="paypal" size={24} color="black" />
        <Text className="ml-4 text-base">PayPal</Text>
      </View>
    </View>
  );
};

export default PaymentMethods;
