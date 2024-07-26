import { View, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { UserProfileContext } from "../config/UserProfileContext";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { UserContext } from "../config/UserContext";

const FavoriteButton = ({ customStyles, chargerID }) => {
  const { currentUser } = useContext(UserContext)
  const { userData } = useContext(UserProfileContext);
  const [chargerSaved, setChargerSaved] = useState();

  useEffect(() => {
    const isSaved = userData?.saved_chargers?.includes(chargerID) || false;
    setChargerSaved(isSaved);
  }, [userData, chargerID]);

  const toggleFavorite = async () => {
    setChargerSaved((prevState) => !prevState);

    const profileRef = doc(db, "profiles", currentUser.uid);

    try {
      if (chargerSaved) {
        // If charger is currently saved, remove it
        await updateDoc(profileRef, {
          saved_chargers: arrayRemove(chargerID),
        });
      } else {
        // If charger is not saved, add it
        await updateDoc(profileRef, {
          saved_chargers: arrayUnion(chargerID),
        });
      }
      setChargerSaved(!chargerSaved); // Update local state
    } catch (error) {
      console.error("Failed to update favorite status", error);
    }
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
