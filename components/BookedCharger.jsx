import { View, Text, Image, TouchableOpacity, Modal, StyleSheet } from "react-native";
import React, { useState, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { UserProfileContext } from "../config/UserProfileContext";
import { UserContext } from "../config/UserContext"
import { db } from "../config/firebaseConfig";
import { arrayRemove, doc, updateDoc } from "firebase/firestore";

const BookedCharger = ({ cardStyles, chargerType, chargerCity, chargerState, imageURL, totalPrice, checkInTime, checkOutTime, checkInMethod, paymentMethod, chargerID }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const { currentUser } = useContext(UserContext)
  const { userData } = useContext(UserProfileContext);

  const onCancelPress = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmCancel = async () => {

    const chargerToRemove = userData.booked_chargers.find((charger) => charger.charger_id === chargerID);
    
    console.log(chargerToRemove)
    console.log(userData.uid)
    const userProfileRef = doc(db, "profiles", currentUser.uid);
    await updateDoc(userProfileRef, {
      booked_chargers: arrayRemove(chargerToRemove)
    });
    setShowConfirmModal(false);
  };

  const handleCancelConfirmation = () => {
    setShowConfirmModal(false);
  };

  return (
    <View>
      <Modal transparent={true} animationType="fade" visible={showConfirmModal} onRequestClose={() => setShowConfirmModal(false)}>
        <View style={[styles.backgroundOpacity, { flex: 1, justifyContent: "center", alignItems: "center" }]}>
          <View className="bg-white p-6 rounded-lg w-4/5">
            <Text className="text-lg text-center font-bold mb-">Confirm cancellation?</Text>
            <Text className="text-center mt-2">Are you sure you want to cancel this booking? This action cannot be undone.</Text>
            <View className="flex-row mt-4 justify-between border-t border-gray-100 pt-4">
              <TouchableOpacity onPress={handleCancelConfirmation} className="h-12 border w-2/5 items-center border-gray-300 rounded-md justify-center">
                <Text className="text-blue-500 font-semibold">No</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleConfirmCancel} className="h-12 border w-36 bg-red-400 items-center border-red-400 rounded-md  justify-center">
                <Text className="text-white font-semibold">Cancel booking</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View className={`mb-6 border border-gray-200 rounded-2xl shadow-md bg-white ${cardStyles}`}>
        <Image className="w-full h-48 rounded-t-2xl" source={{ uri: imageURL }} />
        <View className="p-4">
          <Text className="text-xl font-bold mb-2">{chargerType}</Text>
          <View className="flex-row items-center mb-4">
            <Ionicons name="location-outline" size={16} color="black" />
            <Text className="ml-1">
              {chargerCity}, {chargerState}
            </Text>
          </View>
          <View className="border-t border-gray-200 pt-4">
            <View className="flex-row justify-between mb-3">
              <View>
                <Text className="font-semibold">Check in:</Text>
                <Text className="mt-1">{checkInTime}</Text>
              </View>
              <View>
                <Text className="font-semibold">Check out:</Text>
                <Text className="mt-1">{checkOutTime}</Text>
              </View>
            </View>
            <View className="mt-3">
              <Text className="font-semibold">Check-in method:</Text>
              <Text className="mt-1">{checkInMethod}</Text>
            </View>
            <View className="mt-3">
              <Text className="font-semibold">Payment method:</Text>
              <Text className="mt-1">{paymentMethod}</Text>
            </View>
            <View className="mt-4 bg-gray-100 p-3 rounded-lg">
              <Text className="font-bold text-lg text-center">Total: ${totalPrice}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={onCancelPress} className="p-3 border-t border-gray-200">
          <Text className="text-center text-red-500">Cancel Booking</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundOpacity: {
    backgroundColor: "#00000075",
  },
});

export default BookedCharger;
