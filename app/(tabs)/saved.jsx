import React from "react";
import { useEffect, useState } from "react";
import { View, SafeAreaView, TouchableOpacity, Text, ScrollView, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import EmptySection from "../../components/EmptySection";
import { UserProfileContext } from "../../config/UserProfileContext";
import { useContext } from "react";
import SavedChargerCard from "../../components/SavedChargerCard";
import { db } from "../../config/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const Saved = () => {
  const { userData } = useContext(UserProfileContext);
  const [chargers, setChargers] = useState([]);

  const fetchChargersById = async (documentIDs) => {
    const savedChargers = [];
    const q = query(collection(db, "chargers"), where("__name__", "in", documentIDs));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      savedChargers.push({ id: doc.id, ...doc.data() });
    });

    return savedChargers;
  };

  const handleChargerClick = (chargerID) => {
    router.push({
      pathname: `details/${chargerID}`,
      params: {
        chargerID: chargerID
      }
    })
  }

  useEffect(() => {
    const fetchChargers = async () => {
      if (userData.saved_chargers.length !== 0) {
        try {
          const fetchedChargers = await fetchChargersById(userData.saved_chargers);
          setChargers(fetchedChargers);
        } catch (error) {
          console.error("Error fetching chargers:", error);
        }
      }
    };

    fetchChargers();
  }, [userData.saved_chargers]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView className="mx-6" showsVerticalScrollIndicator="false  ">
        <View className="mt-16">
          <Text className="text-3xl font-semibold">Saved for later</Text>
        </View>
        {userData.saved_chargers.length !== 0 ? (
    
            <View className="mt-6 flex flex-row flex-wrap justify-between">
              {chargers.map((charger) => (
                <TouchableOpacity className="w-full" key={charger.id} activeOpacity={0.7} onPress={() => handleChargerClick(charger.id)}>
                  <SavedChargerCard chargerType={charger.charger_type} chargerCity={charger.city} chargerState={charger.state} imageURL={charger.charger_image} />
                </TouchableOpacity>
              ))}
            </View>

        ) : (
          <View>
            <EmptySection subHeader={"Bummer, no chargers saved."} descriptionText={"Chargers that you've saved for later will appear here."} />
            <CustomButton title="Start exploring" buttonStyles="w-40 h-12 bg-gray-900 mt-4" textStyles="text-white text-base" handlePress={() => router.replace("/explore")} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};



export default Saved;
