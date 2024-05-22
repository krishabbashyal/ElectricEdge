import { SafeAreaView, View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import ElectricEdgeHeader from "../../components/ElectricEdgeHeader";
import CustomButton from "../../components/CustomButton";


const profileSetup = () => {

  return (
    <SafeAreaView>
      <ElectricEdgeHeader customStyles="mt-8" />
      <View className="mx-8">
        <Text className="mb-4 font-medium text-xl">Hello! It is nice to meet you.</Text>


        <CustomButton title="Log In" buttonStyles="bg-EE-Green mt-4" textStyles="text-white"/>
      </View>

    </SafeAreaView>
  );
};

export default profileSetup;
