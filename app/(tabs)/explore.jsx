import { ScrollView, Text, View, SafeAreaView } from "react-native";
import ExploreSearchAndFilter from "../../components/ExploreSearchAndFilter";
import ExploreChargerCard from "../../components/ExploreChargerCard";
import QuickCityFilterScroller from "../../components/QuickCityFilterScroller";
import React from "react";

const explore = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ExploreSearchAndFilter />

        <QuickCityFilterScroller />
        <View className="mx-6 h-full mt-2">
          <ScrollView className="flex-1">
            <View className="flex-col">
              <ExploreChargerCard
                imageFile={require("../../assets/images/dallas.jpeg")}
                chargerType="Level 2: 240-Volt Outlet"
                chargerLocation="Dallas, TX"
                chargerRate="2.37"
              />
              <ExploreChargerCard
                imageFile={require("../../assets/images/boston.jpeg")}
                chargerType="Level 2: 240-Volt Outlet"
                chargerLocation="Boston, MA"
                chargerRate="2.37"
              />
              <ExploreChargerCard
                imageFile={require("../../assets/images/losAngeles.jpeg")}
                chargerType="Level 2: 240-Volt Outlet"
                chargerLocation="Los Angeles, CA"
                chargerRate="2.37"
              />
              <ExploreChargerCard
                imageFile={require("../../assets/images/newYork.jpeg")}
                chargerType="Level 2: 240-Volt Outlet"
                chargerLocation="New York City, NY"
                chargerRate="2.37"
                cardStyles={"mb-48"}
              />
            </View>
          </ScrollView>
        </View>

    </SafeAreaView>
  );
};

export default explore;
