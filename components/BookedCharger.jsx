import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';

const BookedCharger = ({ 
  cardStyles, 
  chargerType, 
  chargerCity, 
  chargerState, 
  imageURL, 
  totalPrice, 
  checkInTime, 
  checkOutTime, 
  checkInMethod, 
  paymentMethod,
  onCancelPress
}) => {
  return (
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
      <TouchableOpacity 
        onPress={onCancelPress}
        className="p-3 border-t border-gray-200"
      >
        <Text className="text-center text-red-500">Cancel Booking</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookedCharger;