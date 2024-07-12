import React from "react";
import { View, Text, SafeAreaView } from "react-native";

const Saved = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View className="mx-8">
        <Text>Charged that you have saved for later will appear here</Text>
      </View>
    </SafeAreaView>
  );
};

export default Saved;
