import React, { useContext } from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import EmptySection from "../../components/EmptySection";
import { UserContext } from "../../config/UserContext";
import { UserProfileContext } from "../../config/UserProfileContext";
import { db } from "../../config/firebaseConfig";
import { Timestamp } from "firebase/firestore";
import BookedCharger from "../../components/BookedCharger";

const Bookings = () => {
  const { currentUser } = useContext(UserContext);
  const { userData } = useContext(UserProfileContext);


  function formatFirebaseTimestamp(timestamp) {
    const date = timestamp.toDate(); // Convert Firebase Timestamp to JavaScript Date object
    
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[date.getMonth()];
    const day = date.getDate().toString().padStart(2, '0');
    
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    return `${month} ${day} at ${hours}:${minutes} ${ampm}`;
  }

  // Check if userData is undefined and show a loading indicator
  if (!userData) {
    return <Text>Loading...</Text>;
  }
    
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView className="mx-6" showsVerticalScrollIndicator={false}>
        <View className="mt-16">
          <Text className="text-3xl font-semibold">Confirmed bookings</Text>
        </View>
        
        {userData.booked_chargers.length === 0 ? (
          <View>
            <EmptySection
              subHeader={"No bookings have been made...yet!"}
              descriptionText={"Don't get caught on the road with a dead car, find a charger for your next trip."}
            />
            <CustomButton 
              title="Start exploring" 
              buttonStyles="w-40 h-12 bg-gray-900 mt-4" 
              textStyles="text-white text-base" 
              handlePress={() => router.replace("/explore")} 
            />
          </View>
        ) : (
          userData.booked_chargers.map((booking) => {
            const checkInDate = formatFirebaseTimestamp(booking.check_in_date);
            const checkOutDate = formatFirebaseTimestamp(booking.check_out_date);

            return (
              <View className="mt-6" key={booking.charger_id}>
                <BookedCharger
                  imageURL={booking.charger_data.charger_image}
                  chargerState={booking.charger_data.state}
                  chargerCity={booking.charger_data.city}
                  checkInTime={checkInDate}
                  checkOutTime={checkOutDate}
                  chargerType={booking.charger_data.charger_type}
                  totalPrice={booking.total_price}
                  paymentMethod={booking.payment_method}
                  checkInMethod={booking.charger_data.self_check_in ? "Check yourself in when you arrive" : "Contact host when ready to check in"}
                  chargerID = {booking.charger_id}
                />
              </View>
            );
          })
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bookings;