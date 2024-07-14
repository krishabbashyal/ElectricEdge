import { SafeAreaView, View, Text } from 'react-native'
import CustomButton from '../../components/CustomButton'
import React from 'react'
import ElectricEdgeHeader from '../../components/ElectricEdgeHeader'
import { router } from 'expo-router'

const chargerListing = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ElectricEdgeHeader customStyles={"mt-8"}/>
      <View className="mx-8">
        <View className="">
          <Text className="text-3xl font-semibold">List your charger</Text>
          <Text className="text-xs">(Coming soon, maybe)</Text>
        </View>
        <Text className="text-base mt-4">As ElectricEdge is a toy project, we are currently not accepting any charger listings from users.</Text>
        <CustomButton title="Go back" buttonStyles="w-40 h-12 bg-gray-900 mt-4" textStyles="text-white text-base" handlePress={() => router.back()} />
      </View>
    </SafeAreaView>
  )
}

export default chargerListing