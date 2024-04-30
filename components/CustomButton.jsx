import React from "react";
import { Text, TouchableOpacity } from "react-native";

const CustomButton = React.forwardRef(({ title, buttonStyles, handlePress, textStyles }, ref) => {
  return (
    <TouchableOpacity ref={ref} className={`rounded-xl min-h-[56px] justify-center items-center bg-slate-400 ${buttonStyles}`} onPress={handlePress} activeOpacity={0.7}>
      <Text className={`font-bold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
});

export default CustomButton;
