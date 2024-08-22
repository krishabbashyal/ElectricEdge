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
  
  // Ensure valid Date object for checkInDate and minCheckInDate
  const [checkInDate, setCheckInDate] = useState(() => {
    const date = new Date();
    date.setSeconds(0)
    const minutes = date.getMinutes();
    const remainder = minutes % 10;
    if (remainder !== 0) {
      date.setMinutes(minutes + (20 - remainder));
    }
    else {
      date.setMinutes(minutes + (10 - remainder));
    }
    return date;
  });

  const [minCheckInDate, setMinCheckInDate] = useState(() => {
    const date = new Date();
    date.setSeconds(0)
    const minutes = date.getMinutes();
    const remainder = minutes % 10;
    if (remainder !== 0) {
      date.setMinutes(minutes + (20 - remainder));
    }
    else {
      date.setMinutes(minutes + (10 - remainder));
    }
    return date;
  });

  const [minCheckOutDate, setMinCheckOutDate] = useState(() => {
    const date = new Date(checkInDate); // Calculate based on checkInDate
    date.setSeconds(0)
    date.setMinutes(date.getMinutes() + 30);
    return date;
  });

  const [checkOutDate, setCheckOutDate] = useState(new Date(minCheckOutDate));

  useEffect(() => {
    // Recalculate minCheckOutDate when checkInDate changes
    const newMinCheckOutDate = new Date(checkInDate);
    newMinCheckOutDate.setMinutes(newMinCheckOutDate.getMinutes() + 30);
    setMinCheckOutDate(newMinCheckOutDate);

    // Update checkOutDate if it’s earlier than newMinCheckOutDate
    if (checkOutDate < newMinCheckOutDate) {
      setCheckOutDate(newMinCheckOutDate);
    }
  }, [checkInDate]);

  const [numOfHours, setNumOfHours] = useState(0);
  const { chargerID } = useLocalSearchParams();

  const onChangeCheckInDate = (event, selectedDate) => {
    const currentDate = selectedDate || checkInDate;
    setCheckInDate(currentDate);
    calculateHoursBetween(currentDate, checkOutDate);
  };

  const onChangeCheckOutDate = (event, selectedDate) => {
    const currentDate = selectedDate || checkOutDate;
    setCheckOutDate(currentDate);
    calculateHoursBetween(checkInDate, currentDate);
  };

  const calculateHoursBetween = (checkInTime, checkOutTime) => {
    const diffInMs = checkOutTime - checkInTime;
    const diffInHours = diffInMs / (1000 * 60 * 60);
    setNumOfHours(diffInHours);
  };

  useEffect(() => {
    calculateHoursBetween(checkInDate, checkOutDate);
  }, [checkInDate, checkOutDate]);

  const fetchChargerDetails = async () => {
    const docRef = doc(db, "chargers", chargerID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setChargerData(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    fetchChargerDetails();
  }, []);

  const logData = () => {
    console.log("")
    console.log("minCheckInDate: ", minCheckInDate.toLocaleString());
    console.log("minCheckOutDate: ", minCheckOutDate.toLocaleString());

    console.log("checkInDate: ", checkInDate.toLocaleString());
    console.log("checkOutDate: ", checkOutDate.toLocaleString());
    console.log("")

  }

  return (
    <View>
      <BackButton customStyles={"mt-16 ml-5"} />
      <View className="h-[105px] border-b border-gray-300">
        <Text className="text-center mt-[67px] font-medium text-base">Confirm Booking</Text>
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
              <DateTimePicker
                mode="datetime"
                value={checkInDate}
                minuteInterval={10}
                minimumDate={minCheckInDate}
                onChange={onChangeCheckInDate}
              />
            </View>
            <View className="flex mt-4 flex-row justify-between items-center">
              <Text>Check-out</Text>
              <DateTimePicker
                mode="datetime"
                value={checkOutDate}
                minuteInterval={10}
                minimumDate={minCheckOutDate}
                onChange={onChangeCheckOutDate}
              />
            </View>
          </View>
        </View>
        <View className="mx-6 mt-4 border-t border-gray-300 pt-4">
          <Text className="font-semibold text-lg">Pricing details</Text>
          <Text>Booking time: {numOfHours.toFixed(2)} hours</Text>
          <Text>Rental Price: ${(numOfHours * chargerData.hourly_rate).toFixed(2)}</Text>
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
