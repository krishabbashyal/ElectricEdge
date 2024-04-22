import { ScrollView, Text, View, SafeAreaView } from "react-native";
import ExploreChargerCard from "../../components/ExploreChargerCard";
import React from "react";

const explore = () => {
  return (
    <ScrollView className="flex-1 bg-elecDark">
      <SafeAreaView>
        {/* Will need to remove this safe area view once the search component is created */}
        <View className="flex-col">
          <ExploreChargerCard />
          <ExploreChargerCard />
          <ExploreChargerCard />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default explore;
