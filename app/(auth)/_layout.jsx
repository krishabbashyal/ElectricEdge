import { Stack } from 'expo-router'
import React from 'react'

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="signUp" options={{headerShown: false}}/>
      <Stack.Screen name="logIn" options={{headerShown: false}}/>
      <Stack.Screen name="profileSetup" options={{headerShown: false}}/>
      <Stack.Screen name="profilePictureSetup" options={{headerShown: false}}/>
    </Stack>
  )
}

export default AuthLayout