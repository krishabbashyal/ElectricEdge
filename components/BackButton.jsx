import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const BackButton = ({customStyles}) => {

  const handleButtonPress = () => {
    router.back()
  }

  return (
    <TouchableOpacity className={`z-10 ${customStyles} absolute`} activeOpacity={1} onPress={handleButtonPress}>
      <View className="p-1 bg-white rounded-full">
        <Ionicons name="arrow-back" size={24} color="black" />
      </View>
    </TouchableOpacity>
  )
}

export default BackButton