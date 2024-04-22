import React, { Fragment } from "react";
import { Tabs } from "expo-router";

import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const TabsLayout = () => {
  return (
    <>
      <StatusBar style="light" />
      <Tabs screenOptions={{ tabBarActiveTintColor: "#DAB350", tabBarInactiveTintColor: "#FFF", tabBarStyle: { backgroundColor: "#14171C", height: 90 } }}>
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
            tabBarIcon: ({ color }) => <Feather name="battery-charging" size={30} color={color} />,
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => <Feather name="user" size={30} color={color} />,
            headerShown: false,
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
