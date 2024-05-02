import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { auth } from "../../config/firebaseConfig";

const Profile = () => {
  const [userEmail, setUserEmail] = useState('');
  
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
      <View className="justify-center items-center h-full">
        <Text>{userEmail}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
