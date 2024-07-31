import { Stack } from "expo-router";
import UserProvider from "../config/UserContext";
import UserProfileProvider from "../config/UserProfileContext";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  return (
    <UserProvider>
      <UserProfileProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="profile/editProfile" options={{ headerShown: false }} />
          <Stack.Screen name="profile/chargerListing" options={{ headerShown: false }} />
          <Stack.Screen name="details/[id]" options={{ headerShown: false}} />
          <Stack.Screen name="bookings/[id]" options={{ headerShown: false}} />
        </Stack>
      </UserProfileProvider>
    </UserProvider>
  );
};

export default RootLayout;
