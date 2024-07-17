import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'

const ChargerBookBanner = ({hourlyRate}) => {
  return (
    <View className="w-full h-[96px] border-t border-gray-400">
      <View className="flex flex-row justify-between  mr-6 items-center">
        <View className="mx-6 mt-2 flex flex-row items-center">
          <Text className="text-lg font-bold">${hourlyRate}</Text>
          <Text className="ml-1 mt-1 text-gray-500">per hour</Text>
        </View>
        <CustomButton buttonStyles="h-14 w-40 mt-3 bg-EE-Green" textStyles="text-white font-semibold" title="Book charger"/>
      </View>
    </View>
  )
}

export default ChargerBookBanner