import { View, TextInput, Text, TouchableOpacity } from "react-native";
import React, { forwardRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useState, useImperativeHandle } from "react";

const CustomInputField = forwardRef(({ label, placeholder, errorMessage, keyboardType, validationType, preventSpaces, sendDataToParent }, ref) => {
  const [inputError, setInputError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userInput, setUserInput] = useState("");

  useImperativeHandle(ref, () => ({
    validate() {
      return handleValidation(userInput);
    },
  }));

  const borderColor = inputError ? "border-EE-Red" : "border-EE-Green";

  const showPasswordIcon = showPassword ? <Ionicons name="eye-off-outline" size={24} color="black" /> : <Ionicons name="eye-outline" size={24} color="black" />;

  const emailValidation = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const passwordValidation = (password) => {
    const trimmedPassword = password.trim();
    return trimmedPassword.length >= 6;
  };

  const stringValidation = (string) => {
    const trimmedString = string.trim();
    return trimmedString.length >= 3;
  };

  const handleValidation = (userInput) => {
    let isValid = null;

    if (validationType === "Email") {
      isValid = emailValidation(userInput);
    }
    if (validationType === "Password") {
      isValid = passwordValidation(userInput);
    }
    if (validationType === "String") {
      isValid = stringValidation(userInput);
    }
    if (!isValid) {
      setInputError(true);
    }
    if (isValid && inputError) {
      setInputError(false);
    }
    return isValid
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
          const newValue = preventSpaces ? e.replace(/\s/g, "") : e;
          setUserInput(newValue);
          sendDataToParent(newValue);
        }}
        value={userInput}
      />
      {inputError && <Text className="mt-2 text-EE-Red font-medium">{errorMessage}</Text>}
      {label === "Password" && (
        <TouchableOpacity className="absolute right-4 mt-[35px]" onPress={() => setShowPassword(!showPassword)}>
          {showPasswordIcon}
        </TouchableOpacity>
      )}
    </View>
  );
});

export default CustomInputField;
