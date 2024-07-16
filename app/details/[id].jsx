import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Details = () => {
  const [chargerData, setChargerData] = useState("");

  const { chargerID } = useLocalSearchParams();

  const fetchChargerDetails = async () => {
    const docRef = doc(db, "chargers", chargerID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setChargerData(docSnap.data());
      console.log(docSnap.data());
    }
  };

  useEffect(() => {
    fetchChargerDetails();
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <Image className="w-full h-[400px]" source={{ uri: chargerData.charger_image }} />
      <View className="mx-6">
        <View>
          <Text className="text-2xl font-bold mt-4">{chargerData.charger_type}</Text>
          <View className="flex flex-row">
            <Text className="text-lg font-medium">
              Charging station in <Text className='font-bold text-EE-Green'>{chargerData.city}, {chargerData.state}</Text>
            </Text>
          </View>
          <View className="mt-4 flex flex-row">
            <Image className="h-14 border w-14 rounded-full" source={{ uri: chargerData.host_image }}/>
            <Text>Hosted by {chargerData.host_display_name}</Text>
          </View>
          <View className="mt-4 border-t  border-gray-300 pt-4">
            <Text className="text-base">{chargerData.description}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Details;
