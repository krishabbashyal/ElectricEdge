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
    { city: "Oklahoma City", state: "OK" },
    { city: "Las Vegas", state: "NV" },
    { city: "Portland", state: "OR" },
    { city: "Memphis", state: "TN" },
    { city: "Louisville", state: "KY" },
    { city: "Baltimore", state: "MD" },
    { city: "Milwaukee", state: "WI" },
    { city: "Albuquerque", state: "NM" },
    { city: "Tucson", state: "AZ" },
    { city: "Fresno", state: "CA" },
    { city: "Sacramento", state: "CA" },
    { city: "Kansas City", state: "MO" },
    { city: "Long Beach", state: "CA" },
    { city: "Mesa", state: "AZ" },
    { city: "Atlanta", state: "GA" },
    { city: "Colorado Springs", state: "CO" },
    { city: "Virginia Beach", state: "VA" },
    { city: "Raleigh", state: "NC" },
    { city: "Omaha", state: "NE" },
    { city: "Miami", state: "FL" },
    { city: "Oakland", state: "CA" },
    { city: "Minneapolis", state: "MN" },
    { city: "Tulsa", state: "OK" },
    { city: "Arlington", state: "TX" },
    { city: "New Orleans", state: "LA" }
  ];
  

  // Random number generator function
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const getRandomHourlyRate = () => (Math.random() * (25 - 5) + 5).toFixed(2);


  // Random boolean generator function
  const getRandomBoolean = () => Math.random() >= 0.5;

  // Random description generator function
  const getRandomDescription = () => {
    const descriptions = [
      "Conveniently located charger with fast charging speeds. Ideal for those on the go who need a quick and efficient recharge. Perfect for busy professionals and travelers.",
      "Affordable and reliable charging station offering exceptional value. Our chargers are well-maintained and easy to use, ensuring a seamless charging experience every time.",
      "Perfect for quick top-ups on the go. Our chargers are situated in prime locations, making it easy for you to access them whenever you need a boost. Great for daily commuters.",
      "High-speed charging available 24/7. Our state-of-the-art chargers are designed to deliver rapid charging, so you can get back on the road quickly. Always ready when you are.",
      "Easy access and self-check-in. Our user-friendly charging stations are perfect for those who value convenience and efficiency. Simply plug in and go, no hassle required.",
      "Premium charging station with top-tier amenities. Enjoy a comfortable waiting area with free Wi-Fi and refreshments while your vehicle charges. The ultimate in convenience and luxury.",
      "Eco-friendly charging solutions for the environmentally conscious driver. Our chargers are powered by renewable energy sources, helping you reduce your carbon footprint.",
      "Safe and secure charging with round-the-clock surveillance. Our chargers are located in well-lit, secure areas, giving you peace of mind whenever you charge your vehicle.",
      "Fast and efficient charging for all EV models. Our versatile chargers are compatible with a wide range of electric vehicles, ensuring you get the power you need, when you need it.",
      "Experience the future of charging with our cutting-edge technology. Our chargers are equipped with the latest advancements to provide a faster, more reliable charging experience.",
      "Conveniently located near shopping centers and restaurants, making it easy to run errands or grab a meal while your car charges. Maximize your time and stay productive.",
      "User-friendly interface and mobile app integration. Monitor your charging status in real-time and receive notifications when your vehicle is fully charged. Charging has never been easier.",
      "Cost-effective charging solutions with flexible payment options. Whether you prefer pay-as-you-go or monthly subscriptions, we have a plan that fits your lifestyle and budget.",
      "24/7 customer support to assist you with any questions or issues. Our dedicated team is always here to help, ensuring a smooth and worry-free charging experience.",
      "Strategically placed chargers to minimize wait times and maximize convenience. Our network of chargers is designed to keep you moving, no matter where your journey takes you."
    ];
    
    return descriptions[getRandomNumber(0, descriptions.length - 1)];
  };

  // Iterate over the object and add data to Firestore
  const addData = async (data) => {
    try {
      for (let i = 0; i < data.length; i++) {
        const chargerType = chargerTypes[getRandomNumber(0, chargerTypes.length - 1)];
        const hourlyRate = getRandomHourlyRate();
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
