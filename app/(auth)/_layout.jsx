import { View, Text } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="signUp" options={{headerShown: false}}/>
      <Stack.Screen name="signIn" options={{headerShown: false}}/>
    </Stack>
  )
}

export default AuthLayout