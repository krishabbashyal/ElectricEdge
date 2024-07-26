import React from "react";
import { useEffect, useState } from "react";
import { View, SafeAreaView, TouchableOpacity } from "react-native";
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

  useEffect(() => {
    const fetchChargers = async () => {
      try {
        const fetchedChargers = await fetchChargersById(userData.saved_chargers);
        setChargers(fetchedChargers);
      } catch (error) {
        console.error("Error fetching chargers:", error);
      }
    };

    fetchChargers();
  }, [userData.saved_chargers]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View className="mx-6">
        {userData.saved_chargers.length !== 0 ? (
          chargers.map((charger) => {
            return (
              <TouchableOpacity key={charger.id} activeOpacity={0.7}>
                <SavedChargerCard
                  chargerType={charger.charger_type}
                  chargerCity={charger.city}
                  chargerState={charger.state}
                  imageURL={charger.charger_image}
                />
              </TouchableOpacity>
            );
          })
        ) : (
          <View>
            <EmptySection
              sectionTitle={"Saved for later"}
              subHeader={"Bummer, no chargers saved."}
              descriptionText={"Chargers that you've saved for later will appear here."}
            />
            <CustomButton title="Start exploring" buttonStyles="w-40 h-12 bg-gray-900 mt-4" textStyles="text-white text-base" handlePress={() => router.replace("/explore")} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Saved;
