import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { auth } from "../../config/firebaseConfig";
import { signOut } from "firebase/auth";
import CustomButton from "../../components/CustomButton"
import { router } from "expo-router";


const Profile = () => {
  const [userEmail, setUserEmail] = useState('');

  const handleUserSignOut = async () => {
    await signOut(auth)
    router.replace("/logIn")

  }
  
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserEmail(user.email);
    } else {
      setUserEmail('No user logged in');
    }
  }, []);

  return (
    <SafeAreaView>
      <View className="justify-center items-center h-full mx-8">
        <Text>{userEmail}</Text>
        <CustomButton title="Sign Out" buttonStyles="w-full h-10 bg-EE-Red mt-4" textStyles="text-white" handlePress={handleUserSignOut}/>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
