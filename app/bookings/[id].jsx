import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useLocalSearchParams } from "expo-router";
import DateTimePicker from "@react-native-community/datetimepicker";
import ConfirmBookingCard from "../../components/ConfirmBookingCard";

import ChargerBookBanner from "../../components/ChargerBookBanner";
import BackButton from "../../components/BackButton";

const Details = () => {
  const [chargerData, setChargerData] = useState("");

  const { chargerID } = useLocalSearchParams();

  const fetchChargerDetails = async () => {
    const docRef = doc(db, "chargers", chargerID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setChargerData(docSnap.data());
      console.log(docSnap.data());
    } else {
      console.log("Something went wrong");
      console.log(JSON.stringify(docSnap.data()));
    }
  };

  useEffect(() => {
    fetchChargerDetails();
  }, []);

  return (
    <View>
      <BackButton customStyles={"mt-16 ml-5"} />

      <View className="h-[105px] border-b border-gray-300">
        <Text className="text-center mt-[67px] font-medium text-base ">Confirm Booking</Text>
      </View>

      <View>
        <ConfirmBookingCard
          chargerImage={chargerData.charger_image}
          chargerType={chargerData.charger_type}
          chargerCity={chargerData.city}
          chargerState={chargerData.state}
          hourlyRate={chargerData.hourly_rate}
        />
        <View className="mx-6 mt-4 border-t border-gray-300 pt-4">
          <Text className="font-semibold text-lg">Booking details</Text>
          <View className="mt-2 mb-4">
            <View className="flex flex-row justify-between items-center">
              <Text>Check in time</Text>
              <DateTimePicker mode="datetime" value={new Date()} minimumDate={new Date()}></DateTimePicker>
            </View>
            <View className="flex mt-2 flex-row justify-between items-center">
              <Text>Check out time</Text>
              <DateTimePicker mode="datetime" value={new Date()} minimumDate={new Date()}></DateTimePicker>
            </View>
          </View>
        </View>
        <View className="mx-6 mt-4 border-t border-gray-300 pt-4">
          <Text className="font-semibold text-lg">Pricing details</Text>
          <View className="mt-2 mb-4">

          </View>
        </View>
      </View>
{/* 
      <View className="fixed bottom-0">
        <ChargerBookBanner hourlyRate={chargerData.hourly_rate} />
      </View> */}
    </View>
  );
};

export default Details;
