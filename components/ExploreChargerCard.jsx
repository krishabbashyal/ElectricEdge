import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const ExploreChargerCard = ({ chargerType, chargerCity, chargerState, chargerRate, imageURL, cardStyles }) => {
  return (
    <View className={`mb-8 ${cardStyles}`}>
      <View className="text-left">
        <TouchableOpacity activeOpacity={0.7}>
          <Image className="w-full h-[350px] rounded-xl" source={{uri: imageURL}} />
          <View className="pb-2">
            <Text className="text-xl font-bold mt-3">{chargerType}</Text>

            <View className="flex flex-row">
              <Text className="text-lg ">{chargerCity}, {chargerState}</Text>
            </View>

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
