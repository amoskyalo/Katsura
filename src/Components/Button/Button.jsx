import { Text } from "react-native";
import React from "react";

const Button = ({ title }) => {
  return (
    <Text className="text-white bg-primaryColor text-[16px] text-center py-3 font-semibold rounded-lg">
      {title}
    </Text>
  );
};

export default Button;
