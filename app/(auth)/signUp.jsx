import { SafeAreaView, View, Text } from 'react-native'
import React from 'react'
import ElectricEdgeHeader from '../../components/ElectricEdgeHeader'
import CustomInputField from '../../components/CustomInputField'
import CustomButton from '../../components/CustomButton'

const signUp = () => {
  return (
    <SafeAreaView>
      <ElectricEdgeHeader customStyles="mt-8"/>
      <View className="mx-8">
        <Text className="mb-4 font-medium text-xl">Sign up for ElectricEdge</Text>
        <CustomInputField label="Email" placeholder="Email"/>
        <CustomInputField label="Password" placeholder="Password"/>
        <CustomButton title="Sign Up" buttonStyles="bg-EE-Green mt-4" textStyles="text-white"/>
      </View>
    </SafeAreaView>
  )
}

export default signUp