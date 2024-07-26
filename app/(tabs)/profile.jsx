import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import ProfileCard from "../../components/ProfileCard";
import ListYourCharger from "../../components/ListYourCharger";
import ProfileSettingsList from "../../components/ProfileSettingsList";


const Profile = () => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View className="mx-6">
        <View className="mt-16">
          <Text className="text-3xl font-semibold">Profile</Text>
        </View>
        <View>
          <ProfileCard/>
        </View>
        <ListYourCharger/>
        <ProfileSettingsList/>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
