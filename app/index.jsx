import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const ElectricEdge = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">ElectricEdge</Text>
      <Link className="mt-4 p-4 text-white bg-blue-700" href="/explore">
        Explore Page
      </Link>
    </View>
  )
}

export default ElectricEdge
