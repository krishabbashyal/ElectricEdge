import { View, Text } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import CustomButton from "./CustomButton";
import { router } from "expo-router";
import { UserContext } from "../config/UserContext";
import { UserProfileContext } from "../config/UserProfileContext";

const ChargerBookBanner = ({ hourlyRate, chargerID }) => {
  const { currentUser } = useContext(UserContext);
  const { userData } = useContext(UserProfileContext);

  const [chargerAlreadyBooked, setChargerAlreadyBooked] = useState(false);

  useEffect(() => {
    // Check if the charger is already booked
    const isBooked = userData.booked_chargers.some((booking) => booking.charger_id === chargerID);
    setChargerAlreadyBooked(isBooked);
  }, []);

  const handleBookButtonPressed = () => {
    router.push({
      pathname: `bookings/${chargerID}`,
      params: { chargerID },
    });
  };



  return (
    <View className="w-full h-[96px] border-t border-gray-400">
      <View className="flex flex-row justify-between mr-6 items-center">
        <View className="mx-6 mt-2 flex flex-row items-center">
          <Text className="text-lg font-bold">${hourlyRate}</Text>
          <Text className="ml-1 mt-1 text-gray-500">per hour</Text>
        </View>
        <CustomButton
          buttonStyles={`h-14 w-40 mt-3 ${chargerAlreadyBooked ? "bg-gray-500" : "bg-EE-Green"}`}
          textStyles="text-white font-semibold"
          disabled={chargerAlreadyBooked}
          title={chargerAlreadyBooked ? "Already booked" : "Book charger"}
          handlePress={chargerAlreadyBooked ? null : handleBookButtonPressed}
        />
      </View>
    </View>
  );
};

export default ChargerBookBanner;
