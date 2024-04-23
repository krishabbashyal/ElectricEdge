import { ScrollView, Text, View, SafeAreaView } from "react-native";
import ExploreChargerCard from "../../components/ExploreChargerCard";
import React from "react";

const explore = () => {
  return (
    <ScrollView className="flex-1 bg-elecDark">
      <SafeAreaView>
        {/* Will need to remove this safe area view once the search component is created */}
        <View className="flex-col">
          <ExploreChargerCard imageFile={require("../../assets/images/dallas.jpeg")} chargerType="Level 2: 240-Volt Outlet" chargerLocation="Dallas, TX" chargerRate="2.37" />
          <ExploreChargerCard imageFile={require("../../assets/images/boston.jpeg")} chargerType="Level 2: 240-Volt Outlet" chargerLocation="Boston, MA" chargerRate="2.37" />
          <ExploreChargerCard imageFile={require("../../assets/images/losAngeles.jpeg")} chargerType="Level 2: 240-Volt Outlet" chargerLocation="Los Angeles, CA" chargerRate="2.37" />
          <ExploreChargerCard imageFile={require("../../assets/images/newYork.jpeg")} chargerType="Level 2: 240-Volt Outlet" chargerLocation="New York City, NY" chargerRate="2.37" />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default explore;
