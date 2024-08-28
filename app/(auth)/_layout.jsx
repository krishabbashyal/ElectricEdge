import { Stack } from "expo-router";
import React from "react";
import UserProvider from "../../config/UserContext";
import UserProfileProvider from "../../config/UserProfileContext";

const AuthLayout = () => {
  return (
    <UserProvider>
      <UserProfileProvider>
        <Stack>
          <Stack.Screen name="signUp" options={{ headerShown: false }} />
          <Stack.Screen name="logIn" options={{ headerShown: false }} />
          <Stack.Screen name="profileSetup" options={{ headerShown: false }} />
          <Stack.Screen name="profilePictureSetup" options={{ headerShown: false }} />
        </Stack>
      </UserProfileProvider>
    </UserProvider>
  );
};

export default AuthLayout;
