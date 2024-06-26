import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import ElectricEdgeHeader from "../../components/ElectricEdgeHeader";
import { router } from "expo-router";

const profilePictureSetup = () => {
  return (
    <SafeAreaView>
      <View>
        <ElectricEdgeHeader customStyles="mt-8" />
        <View className="mx-8">
          <Text className="font-bold text-3xl max-w-lg">Would you like to add a profile picture? </Text>
          <Text className="mb-4 text-gray-700 mt-2 text-[17px]">Don't worry, you can always come back and do this later.</Text>
          <View className="flex items-center">
            <Image className="w-[350px] h-[350px] rounded-full border-[3px] border-slate-700" source={require("../../assets/images/profilePicture.png")} />
          </View>
          <View className="flex flex-row justify-between mt-12">
            <CustomButton title="Go Back" buttonStyles="w-44 bg-slate-700" textStyles="text-white" handlePress={() => router.push("profileSetup")} />
            <CustomButton title="Continue" buttonStyles="bg-EE-Green w-44" textStyles="text-white" />
          </View>
          <View className="flex items-center mt-14">
            <Text className="text-xl font-bold text-blue-400">Setup Later</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default profilePictureSetup;
