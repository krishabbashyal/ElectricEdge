import { View, Text, Image } from 'react-native'
import React from 'react'

const ConfirmBookingCard = ({chargerImage, chargerType, chargerCity, chargerState, hourlyRate}) => {
  return (
    <View className="mx-6 mt-4 mb-4 flex flex-row items-center">
    <Image className="w-40 h-40 rounded-md mr-4" source={{ uri: chargerImage }} />
    <View>
      <Text className="font-semibold text-base">{chargerType}</Text>
      <Text>
        charger in{" "}
        <Text className="font-semibold text-EE-Green">
          {chargerCity}, {chargerState}
        </Text>
      </Text>
      <Text className="mt-4 font-semibold">
        ${hourlyRate} <Text className="font-normal text-gray-500">per hour</Text>
      </Text>
    </View>
  </View>
  )
}

export default ConfirmBookingCard