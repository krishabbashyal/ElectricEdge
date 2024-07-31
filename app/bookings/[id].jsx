import { View, Image, SafeAreaView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useLocalSearchParams } from "expo-router";

import ChargerHostInformation from "../../components/ChargerHostInformation";
import ChargerListingDescription from "../../components/ChargerListingDescription";
import ChargerListingOverview from "../../components/ChargerListingOverview";
import ChargerCheckInMethod from "../../components/ChargerCheckInMethod";
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
      console.log(docSnap.data())
    } else {
      console.log("Something went wrong")
      console.log(JSON.stringify(docSnap.data()))
    }
  };


  useEffect(() => {
    fetchChargerDetails();
  }, []);

  return (
    <SafeAreaView>
      <BackButton customStyles={"mt-16 ml-5"} />
      <Text>Confirm Booking</Text>
      <Image className="w-[150px] h-[150px]" source={{ uri: chargerData.charger_image }} />
      <View className="mx-6 pb-8">
        <ChargerListingOverview chargerType={chargerData.charger_type} city={chargerData.city} state={chargerData.state} />
        <ChargerHostInformation hostDisplayName={chargerData.host_display_name} hostProfilePicture={chargerData.host_image} />
        <ChargerCheckInMethod allowSelfCheckIn={chargerData.self_check_in} />
        <ChargerListingDescription description={chargerData.description} />
      </View>

      <View className="fixed bottom-0">
        <ChargerBookBanner hourlyRate={chargerData.hourly_rate} />
      </View>
    </SafeAreaView>
  );
};

export default Details;
