import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const ExploreChargerCard = ({ chargerType, chargerLocation, chargerRate, imageFile, cardStyles }) => {
  const imageSource = imageFile;
  return (
    <View className={`mb-8 ${cardStyles}`}>
      <View className="text-left">
        <TouchableOpacity activeOpacity={0.7}>
          <Image className="w-full h-[350px] rounded-xl" source={imageSource} />
          <View className="pb-2">
            <Text className="text-xl font-bold mt-3">{chargerType}</Text>
            <Text className="text-lg ">{chargerLocation}</Text>
            <Text className="text-lg font-bold ">
              ${chargerRate}
              <Text className="font-normal"> per hour</Text>
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ExploreChargerCard;
