import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import CustomButton from '../../components/CustomButton';
import React from 'react';
import ElectricEdgeHeader from '../../components/ElectricEdgeHeader';
import { router } from 'expo-router';
import { db } from '../../config/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const chargerListing = () => {
  // Example data arrays
  const chargerTypes = [
    "Level 2: 240-Volt Outlet",
    "Level 1: 120-Volt Outlet",
    "DC Fast Charging"
  ];

  const cities = [
    { city: "New York", state: "NY" },
    { city: "Los Angeles", state: "CA" },
    { city: "Chicago", state: "IL" },
    { city: "Houston", state: "TX" },
    { city: "Phoenix", state: "AZ" },
    { city: "Philadelphia", state: "PA" },
    { city: "San Antonio", state: "TX" },
    { city: "San Diego", state: "CA" },
    { city: "Dallas", state: "TX" },
    { city: "San Jose", state: "CA" },
    { city: "Austin", state: "TX" },
    { city: "Jacksonville", state: "FL" },
    { city: "Fort Worth", state: "TX" },
    { city: "Columbus", state: "OH" },
    { city: "Charlotte", state: "NC" },
    { city: "San Francisco", state: "CA" },
    { city: "Indianapolis", state: "IN" },
    { city: "Seattle", state: "WA" },
    { city: "Denver", state: "CO" },
    { city: "Washington", state: "DC" },
    { city: "Boston", state: "MA" },
    { city: "El Paso", state: "TX" },
    { city: "Nashville", state: "TN" },
    { city: "Detroit", state: "MI" },
    { city: "Oklahoma City", state: "OK" }
  ];

  // Random number generator function
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  // Random boolean generator function
  const getRandomBoolean = () => Math.random() >= 0.5;

  // Random description generator function
  const getRandomDescription = () => {
    const descriptions = [
      "Conveniently located charger with fast charging speeds.",
      "Affordable and reliable charging station.",
      "Perfect for quick top-ups on the go.",
      "High-speed charging available 24/7.",
      "Easy access and self-check-in."
    ];
    return descriptions[getRandomNumber(0, descriptions.length - 1)];
  };

  // Iterate over the object and add data to Firestore
  const addData = async (data) => {
    try {
      for (let i = 0; i < data.length; i++) {
        const chargerType = chargerTypes[getRandomNumber(0, chargerTypes.length - 1)];
        const hourlyRate = getRandomNumber(5, 25);
        const location = cities[getRandomNumber(0, cities.length - 1)];
        const description = getRandomDescription();
        const selfCheckIn = getRandomBoolean();

        const docRef = await addDoc(collection(db, "chargers"), {
          charger_image: "gs://electricedge-5e87a.appspot.com/charger_images/OAI User Content.jpeg",
          charger_type: chargerType,
          hourly_rate: hourlyRate,
          city: location.city,
          state: location.state,
          description: description,
          host_display_name: "GPT-4o",
          host_image: "gs://electricedge-5e87a.appspot.com/profile_pictures/OpenAI logo.jpeg",
          self_check_in: selfCheckIn,
          amenities: []
        });

        console.log(`Document ${i + 1} added with ID: ${docRef.id}`);
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // Example iterateObject array with 25 empty objects
  let iterateObject = new Array(25).fill({});

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ElectricEdgeHeader customStyles={"mt-8"} />
      <View className="mx-8">
        <View className="">
          <Text className="text-3xl font-semibold">List your charger</Text>
          <Text className="text-xs">(Coming soon, maybe)</Text>
        </View>
        <Text className="text-base mt-4">As ElectricEdge is a toy project, we are currently not accepting any charger listings from users.</Text>
        <CustomButton title="Go back" buttonStyles="w-40 h-12 bg-gray-900 mt-4" textStyles="text-white text-base" handlePress={() => router.back()} />
      </View>
      <TouchableOpacity className="mt-40" onPress={() => addData(iterateObject)}>
        <Text>Add Data</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default chargerListing;
