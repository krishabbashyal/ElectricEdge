import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

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
  { city: "San Jose", state: "CA" }
];

// Random number generator function
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Iterate over the object and add data to Firestore
const addData = async (data) => {
  try {
    for (let i = 0; i < data.length; i++) {
      const chargerType = chargerTypes[getRandomNumber(0, chargerTypes.length - 1)];
      const hourlyRate = getRandomNumber(5, 25);
      const location = cities[getRandomNumber(0, cities.length - 1)];

      const docRef = await addDoc(collection(db, "chargers"), {
        charger_image: "gs://electricedge-5e87a.appspot.com/charger_images/OAI User Content.jpeg",
        charger_type: chargerType,
        hourly_rate: hourlyRate,
        city: location.city,
        state: location.state,
        host_display_name: "GPT-4o"
      });

      console.log(`Document ${i + 1} added with ID: ${docRef.id}`);
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// Example iterateObject array with 25 empty objects
let iterateObject = new Array(25).fill({});

// Call addData function with iterateObject
addData(iterateObject);
