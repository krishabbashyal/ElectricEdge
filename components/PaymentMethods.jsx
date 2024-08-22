import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const PaymentMethods = () => {
  const [activeMethod, setActiveMethod] = useState();

  return (
    <View className="mt-2">
      <TouchableOpacity activeOpacity={1.0}
        className={`border h-15 p-4 rounded-xl border-gray-400 border- flex flex-row items-center mb-2 ${activeMethod === "paypal" ? "border-gray-800 border-[1.5px]" : ""}`}
        onPress={() => setActiveMethod("paypal")}>
        <FontAwesome name="paypal" size={24} color="black" />
        <Text className="ml-6 text-base">PayPal</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1.0}
        className={`border h-15 p-4 rounded-xl border-gray-400 flex flex-row items-center mb-2 ${activeMethod === "credit-card" ? "border-gray-800 border-[1.5px]" : ""}`}
        onPress={() => setActiveMethod("credit-card")}>
        <FontAwesome name="cc-discover" size={24} color="black" />
        <View className="flex flex-row items-center ml-4">
          <Text className="text-[8px]">&#9679;&#9679;&#9679;&#9679;</Text>
          <Text className="ml-1 text-base">8542</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1.0}
        className={`border h-15 p-4 rounded-xl border-gray-400 flex flex-row items-center mb-2 ${activeMethod === "apple-pay" ? "border-gray-800 border-[1.5px]" : ""}`}
        onPress={() => setActiveMethod("apple-pay")}>
        <FontAwesome5 name="apple-pay" size={26} color="black" />
        <Text className="ml-4 text-base">Apple Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentMethods;
