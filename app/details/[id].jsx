import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import ChargerHostInformation from "../../components/ChargerHostInformation";
import ChargerListingDescription from "../../components/ChargerListingDescription";
import ChargerListingOverview from "../../components/ChargerListingOverview";
import ChargerCheckInMethod from "../../components/ChargerCheckInMethod";

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
        <ChargerListingOverview chargerType={chargerData.charger_type} city={chargerData.city} state={chargerData.state} />
        <ChargerHostInformation hostDisplayName={chargerData.host_display_name} hostProfilePicture={chargerData.host_image} />
        <ChargerCheckInMethod allowSelfCheckIn={chargerData.self_check_in}/>
        <ChargerListingDescription description={chargerData.description} />
      </View>
    </>
  );
};

export default Details;
