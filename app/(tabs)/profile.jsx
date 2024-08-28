import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import ProfileCard from "../../components/ProfileCard";
import ListYourCharger from "../../components/ListYourCharger";
import ProfileSettingsList from "../../components/ProfileSettingsList";


const Profile = () => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View className="mx-6 pb-8">
          <View className="mt-16">
            <Text className="text-3xl font-semibold">Profile</Text>
          </View>
          <View>
            <ProfileCard/>
          </View>
          <ListYourCharger/>
          <ProfileSettingsList/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
