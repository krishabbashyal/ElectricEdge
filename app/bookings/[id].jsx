import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useLocalSearchParams } from "expo-router";
import DateTimePicker from "@react-native-community/datetimepicker";
import ConfirmBookingCard from "../../components/ConfirmBookingCard";

import CustomButton from "../../components/CustomButton";
import BackButton from "../../components/BackButton";

const Details = () => {
  const [chargerData, setChargerData] = useState("");
  const [checkInDate, setCheckInDate] = useState(() => {
    const date = new Date();
    const minutes = date.getMinutes();
    const remainder = minutes % 10;
    if (remainder !== 0) {
      date.setMinutes(minutes + (20 - remainder));
    }
    return date;
  });

  const [minCheckInDate, setMinCheckInDate] = useState(() => {
    const date = new Date();
    const minutes = date.getMinutes();
    const remainder = minutes % 10;
    if (remainder !== 0) {
      date.setMinutes(minutes + (20 - remainder));
    }
    return date;
  });


  const [minCheckOutDate, setMinCheckOutDate] = useState(() => {
    const date = new Date(minCheckInDate)
    date.setMinutes(date.getMinutes() + 30)
    return date ;
  });

  const [checkOutDate, setCheckOutDate] = useState(new Date(minCheckOutDate));
  
  
  useEffect(() => {
    const newMinCheckOutDate = new Date(checkInDate);
    newMinCheckOutDate.setMinutes(newMinCheckOutDate.getMinutes() + 30);
    setMinCheckOutDate(newMinCheckOutDate);
  }, [checkInDate]);

  const [numOfHours, setNumOfHours] = useState(0);

  const { chargerID } = useLocalSearchParams();


  const onChangeCheckInDate = (selectedDate) => {
    setCheckInDate(selectedDate);
    calculateHoursBetween(selectedDate, checkOutDate);
  };

  const onChangeCheckOutDate = (selectedDate) => {
    setCheckOutDate(selectedDate);
    calculateHoursBetween(checkInDate, selectedDate);
  };
  const calculateHoursBetween = (checkInTime, checkOutTime) => {
    const diffInMs = checkOutTime - checkInTime;
    const diffInHours = diffInMs / (1000 * 60 * 60);
    setNumOfHours(diffInHours)
  };

  const logData = () => {
    console.log("")
    console.log("minCheckInDate: ", minCheckInDate.toLocaleString());
    console.log("minCheckOutDate: ", minCheckOutDate.toLocaleString());

    console.log("checkInDate: ", checkInDate.toLocaleString());
    console.log("checkOutDate: ", checkOutDate.toLocaleString());
    console.log("")

  }

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
              <Text>Check-in</Text>
              <DateTimePicker mode="datetime" value={checkInDate} minuteInterval={10} minimumDate={minCheckInDate} onChange={onChangeCheckInDate}></DateTimePicker>
            </View>
            <View className="flex mt-4 flex-row justify-between items-center">
              <Text>Check-out</Text>
              <DateTimePicker mode="datetime" value={checkOutDate} minuteInterval={10} minimumDate={minCheckOutDate} onChange={onChangeCheckOutDate}></DateTimePicker>
            </View>
          </View>
        </View>
        <View className="mx-6 mt-4 border-t border-gray-300 pt-4">
          <Text className="font-semibold text-lg">Pricing details</Text>
          <Text>Booking time: {numOfHours} hours</Text>
          <Text>Rental Price: ${numOfHours * chargerData.hourly_rate}</Text>
          <Text>Booking Fee: $5.00</Text>
          <Text>Total: ${numOfHours * chargerData.hourly_rate + 5}</Text>

        </View>
      </View>

      <View className="fixed bottom-0">
        <CustomButton title="Continue" handlePress={() => logData()} />
      </View>
    </View>
  );
};

export default Details;
