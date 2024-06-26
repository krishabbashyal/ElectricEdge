import { View, Text } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { useState, useEffect } from 'react';

const AlertBanner = ({serverMessage, type}) => {
  const [clientServerMessage, setClientServerMessage] = useState()

  useEffect(() => {
    switch (serverMessage) {
      case "Firebase: Error (auth/invalid-credential).":
        setClientServerMessage("Invalid email or password.")
        console.log("Triggered")
        break
      case "Firebase: Error (auth/email-already-in-use).":
        setClientServerMessage("An account with this email already exists.")
        console.log("Triggered 2")
        break
      default:
        setClientServerMessage("An unknown error occured")
    }
  }, [serverMessage]) 




  return (
    <View className="w-full border border-EE-Red bg-red-100 h-10 items-center rounded-lg mb-4 flex-row">
      <View className="rounded-l-lg bg-red-300 p-2">
        <Feather name="info" size={22} color="black" />
      </View>
      <View className="ml-2">
        <Text className="font-medium">{clientServerMessage}</Text>
      </View>
    </View>
  )
}

export default AlertBanner