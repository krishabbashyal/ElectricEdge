import React, { useState, useEffect } from "react";
import { ScrollView, Text, View, SafeAreaView } from "react-native";
import ExploreSearchAndFilter from "../../components/ExploreSearchAndFilter";
import ExploreChargerCard from "../../components/ExploreChargerCard";
import QuickCityFilterScroller from "../../components/QuickCityFilterScroller";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { storage } from "../../config/firebaseConfig";

const Explore = () => {
  const [chargers, setChargers] = useState([]);

  const fetchAllChargers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "chargers"));
      const chargers = [];
      querySnapshot.forEach((doc) => {
        chargers.push({ id: doc.id, ...doc.data() });
      });
      console.log(chargers)
      return chargers;
    } catch (error) {
      console.error("Error fetching documents: ", error);
      return [];
    }
  };

  useEffect(() => {
    const getChargers = async () => {
      const data = await fetchAllChargers();
      setChargers(data);
    };

    getChargers();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ExploreSearchAndFilter />
      <QuickCityFilterScroller />
      <View className="mx-6 h-full mt-2">
        <ScrollView className="flex-1">
          {chargers.map((charger) => (

            <ExploreChargerCard
              key={charger.id}
              chargerType={charger.charger_type}
              chargerCity={charger.city}
              chargerState={charger.state}
              chargerRate={charger.hourly_rate}
              imageURL={charger.charger_image}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Explore;
