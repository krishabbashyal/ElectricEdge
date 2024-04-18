import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const ElectricEdge = () => {
  return (
    <View style={styles.container}>
      <Text className="mt-24">ElectricEdge</Text>
      <Link className=""href="/explore">
        Explore Page
      </Link>
    </View>
  )
}

export default ElectricEdge
