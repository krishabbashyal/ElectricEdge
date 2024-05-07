import { View, Text } from 'react-native'
import React from 'react'
import QuickCityFilter from './QuickCityFilter'


const QuickCityFilterScroller = () => {
  return (
    <View className="flex flex-row h-[72px] mt-2 border-b border-slate-200">
      <QuickCityFilter city="Dallas, TX"/>
      <QuickCityFilter city="Austin, TX"/>
      <QuickCityFilter city="Dallas, TX"/>
      <QuickCityFilter city="Austin, TX"/>
      <QuickCityFilter city="Dallas, TX"/>
      <QuickCityFilter city="Austin, TX"/>
    </View>
  )
}

export default QuickCityFilterScroller