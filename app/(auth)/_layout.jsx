import { Stack } from 'expo-router'
import React from 'react'
import UserProvider from '../../config/UserContext'

const AuthLayout = () => {
  return (
    <UserProvider>
      <Stack>
        <Stack.Screen name="signUp" options={{headerShown: false}}/>
        <Stack.Screen name="logIn" options={{headerShown: false}}/>
        <Stack.Screen name="profileSetup" options={{headerShown: false}}/>
        <Stack.Screen name="profilePictureSetup" options={{headerShown: false}}/>
      </Stack>
    </UserProvider>
  )
}

export default AuthLayout