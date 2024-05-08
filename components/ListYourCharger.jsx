import { View, Text, Image } from 'react-native'
import React from 'react'

const ListYourCharger = () => {
  return (
    <View>
      <View className="mt-6 flex-row rounded-lg h-28 w-full border bg-white shadow-md border-slate-100">      
          <View className="mt-4 ml-4 flex-col">
            <Text className="text-[17px] font-semibold">List your charger</Text>
            <Text className="w-56 mt-3 text-gray-500">It's fast and easy to get listed on ElectricEdge and start earning.</Text>
          </View>
          <Image className="w-28 h-28" source={require(".././assets/images/ListYourCharger.png")}/>
      </View>
    </View>
  )
}

export default ListYourCharger