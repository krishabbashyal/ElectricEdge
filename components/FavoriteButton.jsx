import { View, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons';

const FavoriteButton = ({ customStyles }) => {
  const handleFavoritePressed = () => {};

  const handleFavoriteUnpressed = () => {};

  return (
    <TouchableOpacity className={`z-10 ${customStyles} absolute`} activeOpacity={1}>
      <View className="p-1.5 bg-white rounded-full">
      <AntDesign name="heart" size={20} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default FavoriteButton;
