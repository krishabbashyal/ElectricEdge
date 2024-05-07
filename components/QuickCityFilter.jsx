import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

const QuickCityFilter = ({city}) => {
  return (
    <View className="h-full items-center justify-center mr-1 pl-6">
      <FontAwesome name="building-o" size={24} color="#424242" />
      <Text className="mt-1 text-xs text-[#424242] font-semibold">{city}</Text>
    </View>
  )
}

export default QuickCityFilter