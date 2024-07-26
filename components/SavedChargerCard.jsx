import { View, Text, Image} from "react-native";
import React from "react";

const SavedChargerCard = ({ chargerType, chargerCity, chargerState, imageURL, cardStyles }) => {
  return (
    <View className={`mb-4 ${cardStyles}`}>
      <View className="text-left">
          <Image className="w-[186px] h-[186px] rounded-xl" source={{uri: imageURL}} />
          <View className="pb-2">
            <Text className="font-semibold mt-1">{chargerType}</Text>

            <View className="flex flex-row">
              <Text className="text-sm">{chargerCity}, {chargerState}</Text>
            </View>
          </View>
      </View>
    </View>
  );
};

export default SavedChargerCard;
