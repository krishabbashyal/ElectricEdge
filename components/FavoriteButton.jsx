import { View, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { UserProfileContext } from "../config/UserProfileContext";

const FavoriteButton = ({ customStyles, chargerID }) => {
  const { userData } = useContext(UserProfileContext);
  const [chargerSaved, setChargerSaved] = useState();

  useEffect(() => {
    const isSaved = userData?.saved_chargers?.includes(chargerID) || false;
    setChargerSaved(isSaved);
  }, [userData, chargerID]);

  const toggleFavorite = () => {
    setChargerSaved(prevState => !prevState);
    // Add backend update logic here if needed
  };

  return (
    <TouchableOpacity className={`z-10 ${customStyles} absolute`} activeOpacity={1} onPress={toggleFavorite}>
      <View className="p-1.5 bg-white rounded-full">
        <AntDesign name={chargerSaved ? "heart" : "hearto"} size={21} color={chargerSaved ? "#FF4263" : "black"} />
      </View>
    </TouchableOpacity>
  );
};

export default FavoriteButton;
