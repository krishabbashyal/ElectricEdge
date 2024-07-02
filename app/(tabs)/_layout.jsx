import React from "react";
import { Tabs } from "expo-router";
import UserProvider from "../../config/UserContext";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const TabsLayout = () => {
  return (
    <UserProvider>
      <StatusBar style="dark" />
      <Tabs screenOptions={{ tabBarActiveTintColor: "#3A8060", tabBarInactiveTintColor: "#A2AFA9", tabBarStyle: { backgroundColor: "#fff", height: 90,  } }}>
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
            tabBarIcon: ({ color }) => <Feather name="battery-charging" size={32} color={color} />,
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => <Feather name="user" size={32} color={color} />,
            headerShown: false,
          }}
        />
      </Tabs>
    </UserProvider>
  );
};

export default TabsLayout;
