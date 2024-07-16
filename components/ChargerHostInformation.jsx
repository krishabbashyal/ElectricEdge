import { View, Text, Image } from 'react-native'
import React from 'react'

const ChargerHostInformation = ({hostDisplayName, hostProfilePicture}) => {
  return (
    <View className="border-t border-gray-300 flex flex-row items-center mt-4 pt-3">
    <Image className="h-12 border w-12 rounded-full" source={{ uri: hostProfilePicture }}/>
    <View>
      <Text className="ml-4 font-medium text-base">Hosted by {hostDisplayName}</Text>
      <Text className="ml-4 -mt-0.5 text-sm text-gray-500">AI generated charger listing</Text>
    </View>
  </View>
  )
}

export default ChargerHostInformation