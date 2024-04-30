import { View, TextInput, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const CustomInputField = ({ label, placeholder, errorMessage, keyboardType, validationType, preventSpaces }) => {
  const [inputError, setInputError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [fieldData, setFieldData] = useState(null);

  const borderColor = inputError ? "border-EE-Red" : "border-EE-Green";

  const showPasswordIcon = showPassword ? <Ionicons name="eye-off-outline" size={24} color="#3A8060" /> : <Ionicons name="eye-outline" size={24} color="#3A8060" />;

  const emailValidation = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const passwordValidation = (password) => {
    const trimmedPassword = password.trim();
    return trimmedPassword.length >= 6;
  };

  const handleValidation = (fieldData) => {
    let isValid = null;

    if (validationType === "Email") {
      isValid = emailValidation(fieldData);
    }
    if (validationType === "Password") {
      isValid = passwordValidation(fieldData);
    }
    if (!isValid) {
      setInputError(true);
    }
    if (isValid && inputError) {
      setInputError(false);
    }
    console.log(fieldData, isValid);
  };

  return (
    <View className="mb-4">
      <Text className="font-medium mb-1.5">{label}</Text>
      <TextInput
        className={`h-12 w-full px-4 border focus:border-2 rounded-lg ${borderColor} bg-white placeholder:font-medium`}
        placeholder={placeholder}
        secureTextEntry={label === "Password" && !showPassword}
        keyboardType={keyboardType}
        onChangeText={(e) => {
          if (preventSpaces === true) {
            cleanedInput = e.replace(/\s/g, "");
            setFieldData(cleanedInput);
          }
        }}
        value={fieldData}
      />
      {inputError && <Text className="mt-2 text-EE-Red font-medium">{errorMessage}</Text>}
      {label === "Password" && (
        <TouchableOpacity className="absolute right-4 mt-[35px]" onPress={() => setShowPassword(!showPassword)}>
          {showPasswordIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInputField;
