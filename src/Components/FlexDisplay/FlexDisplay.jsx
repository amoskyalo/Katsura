import { View, Text } from "react-native";
import React from "react";

const FlexDisplay = ({ children, className, ...props }) => {
  return (
    <View
      className={`flex flex-row items-center justify-between w-full ${className}}`}
      {...props}
    >
      {children}
    </View>
  );
};

export default FlexDisplay;
