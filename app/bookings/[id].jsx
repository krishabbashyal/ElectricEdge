import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { db } from "../../config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useLocalSearchParams } from "expo-router";
import DateTimePicker from "@react-native-community/datetimepicker";
import ConfirmBookingCard from "../../components/ConfirmBookingCard";
import CustomButton from "../../components/CustomButton";
import BackButton from "../../components/BackButton";
import PricingDetails from "../../components/PricingDetails";
import PaymentMethods from "../../components/PaymentMethods";

import { UserContext } from "../../config/UserContext";
import { UserProfileContext } from "../../config/UserProfileContext";

const Details = () => {
  const { currentUser } = useContext(UserContext);
  const { userData  } = useContext(UserProfileContext);

  const [chargerData, setChargerData] = useState("");
  
  // Ensure valid Date object for checkInDate and minCheckInDate
  const [checkInDate, setCheckInDate] = useState(() => {
    const date = new Date();
    date.setSeconds(0)
    const minutes = date.getMinutes();
    const remainder = minutes % 10;
    date.setMinutes(minutes + (20 - remainder));
    
    return date;
  });

  const [minCheckInDate, setMinCheckInDate] = useState(() => {
    const date = new Date();
    date.setSeconds(0)
    const minutes = date.getMinutes();
    const remainder = minutes % 10;
    date.setMinutes(minutes + (20 - remainder));

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

  const [paymentMethodFromChild, setPaymentMethodFromChild] = useState();

  const handlePaymentMethodFromChild = (paymentMethod) => {
    setPaymentMethodFromChild(paymentMethod);
    console.log("paymentMethodFromChild: ", paymentMethodFromChild);
  }  

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

  const handleConfirmPressed = () => {
    console.log("")
    console.log("checkInDate: ", checkInDate);
    console.log("checkOutDate: ", checkOutDate);
    console.log("")

  }

  return (
    <ScrollView>
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
        <View className="-mx-6 mt-4 border-t-8 border-[#E3E3E4] pt-4">
          <View className="mx-12">
            <Text className="font-semibold text-xl">Booking details</Text>
            <View className="mt-2 mb-4">
              <View className="flex flex-row justify-between items-center">
                <Text className="text-base">Check-in</Text>
                <DateTimePicker
                  mode="datetime"
                  value={checkInDate}
                  minuteInterval={10}
                  minimumDate={minCheckInDate}
                  onChange={onChangeCheckInDate}
                />
              </View>
              <View className="flex mt-4 flex-row justify-between items-center">
                <Text className="text-base">Check-out</Text>
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
        </View>
        <View className="-mx-6 mt-4 border-t-8 border-[#E3E3E4] pt-4">
          <View className="mx-12">
            <Text className="font-semibold text-xl">Pricing details</Text>
              <PricingDetails bookingDuration={numOfHours.toFixed(2)} hourlyRate={chargerData.hourly_rate}/>
          </View>
        </View>
        <View className="-mx-6 mt-2 border-t-8 border-b-8 pb-3 border-[#E3E3E4] pt-4">
          <View className="mx-12">
            <Text className="font-semibold text-xl">Payment method</Text>
            <PaymentMethods onSendData={handlePaymentMethodFromChild}/>
          </View>
        </View>
      </View>
      <View className="fixed bottom-0 pb-16 mt-8 mx-6">
        <CustomButton title="Confirm and pay" buttonStyles="bg-[#3A8060] h-14" textStyles="text-white" handlePress={() => handleConfirmPressed()} />
      </View>
    </ScrollView>
  );
};

export default Details;
