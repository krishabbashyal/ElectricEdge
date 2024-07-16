import { View, Text, Image } from 'react-native'
import React from 'react'

const ChargerHostInformation = ({hostDisplayName, hostProfilePicture}) => {
  return (
    <View className="mt-4 border-t  border-gray-300 pt-4 flex flex-row items-center">
    <Image className="h-12 border w-12 rounded-full" source={{ uri: hostProfilePicture }}/>
    <View>
      <Text className="ml-4 font-medium text-base">Hosted by {hostDisplayName}</Text>
      <Text className="ml-4 -mt-1 text-sm text-gray-500">AI generated charger listing</Text>
    </View>
  </View>
  )
}

export default ChargerHostInformation