import { View, TextInput, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const CustomInputField = ({ label, placeholder, errorMessage }) => {
  const [inputError, setInputError] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const borderColor = inputError ? "border-EE-Red" : "border-EE-Green";

  const showPasswordIcon = showPassword ? <Ionicons name="eye-off-outline" size={24} color="black" /> : <Ionicons name="eye-outline" size={24} color="black" />;

  const emailValidation = () => {};

  const passwordValidation = () => {};

  return (
    <View className="mb-4">
      <Text className="font-medium mb-1.5">{label}</Text>
      <TextInput
        className={`h-12 w-full px-4 border rounded-lg ${borderColor} bg-white placeholder:font-medium`}
        placeholder={placeholder}
        secureTextEntry={label === "Password" && !showPassword}
      />
      {inputError && <Text className="mt-2 text-EE-Red font-medium">{errorMessage}</Text>}
      {label === "Password" && (
        <TouchableOpacity className="absolute right-4 mt-9" onPress={() => setShowPassword(!showPassword)}>
          {showPasswordIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInputField;
