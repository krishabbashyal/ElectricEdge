import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import ProfileCard from "../../components/ProfileCard";


const Profile = () => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View className="mx-8">
        <View className="mt-16">
          <Text className="text-3xl font-semibold">Profile</Text>
        </View>
        <View>
          <ProfileCard/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
