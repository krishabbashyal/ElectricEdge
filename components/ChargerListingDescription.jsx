import { View, Text } from 'react-native'
import React from 'react'

const ChargerListingDescription = ({description}) => {
  return (
    <View className="mt-4 border-t border-gray-300 pt-4">
    <Text className="text-lg font-semibold ">About this listing</Text>
    <Text className="text-base">{description}</Text>
  </View>
  )
}

export default ChargerListingDescription