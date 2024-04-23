import { View, Text, Image } from "react-native";
import React from "react";

const ExploreChargerCard = ({ chargerType, chargerLocation, chargerRate, imageFile }) => {
  const imageSource = imageFile;
  return (
    <View className="mx-6 mb-8">
      <View className="text-left">
        <Image className="w-full h-[350px] rounded-xl" source={imageSource} />
        <View className="pb-2">
          <Text className="text-white text-xl font-bold mt-3">{chargerType}</Text>
          <Text className="text-white text-lg ">{chargerLocation}</Text>
          <Text className="text-white text-lg font-bold ">
            ${chargerRate}
            <Text className="font-normal"> per hour</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ExploreChargerCard;
