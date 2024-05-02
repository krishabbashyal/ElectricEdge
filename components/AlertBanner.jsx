import { View, Text } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

const AlertBanner = ({message, type}) => {
  return (
    <View className="w-full border border-EE-Red bg-red-100 h-10 items-center rounded-lg mb-4 flex-row">
      <View className="rounded-l-lg bg-red-300 p-2">
        <Feather name="info" size={22} color="black" />
      </View>
      <View className="ml-2">
        <Text className="font-medium">{message}</Text>
      </View>
    </View>
  )
}

export default AlertBanner