import { View, TextInput, Text } from "react-native";
import React from "react";

import { useState } from "react";

const CustomInputField = ({ label, placeholder }) => {
  const [showErrorMsg, setShowErrorMsg] = useState(true)
  return (
    <View className="mb-4">
      <Text className="font-medium mb-1.5">{label}</Text>
      <TextInput className="h-12 w-full px-4 border rounded-lg border-EE-Green bg-white placeholder:font-medium" placeholder={placeholder}/>
      
    </View>
  );
};

export default CustomInputField;
