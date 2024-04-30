import { View, Text, Image } from "react-native";
import React from "react";

const ElectricEdgeHeader = ({customStyles}) => {
  return (
    <View className={`flex-row justify-center items-center gap-2 mb-12 ${customStyles}`}>
      <Image className="w-8 h-8" source={require("../assets/images/electricEdgeLogo.png")} />
      <Text className="text-3xl font-semibold">ElectricEdge</Text>
    </View>
  );
};

export default ElectricEdgeHeader;
