import { Text, TextInput, View } from "react-native";
import React from "react";
import { fontPixel } from "./Normalize";

const CardNameTextInput = ({
  updateName,
  defaultBorderColor,
  label,
  focus,
  touched,
  focusColor,
  cardError,
  errorColor,
  placeholder,
  ...props
}) => {
  let validationColor = !touched
    ? defaultBorderColor
    : cardError
    ? "#FF5A5F"
    : focus
    ? focusColor
    : defaultBorderColor;
  return (
    <View className="w-full justify-start">
      <Text className="text-[#555] capitalize ml-2">{label}</Text>
      <View
        style={{ borderColor: validationColor }}
        className="w-full h-[50px] mt-2 mb-1 flex-row items-center justify-evenly bg-white rounded-xl border"
      >
        <TextInput
          {...props}
          onChangeText={(text) => {
            updateName(text);
          }}
          clearButtonMode="while-editing"
          returnKeyLabel={"Next"}
          returnKeyType={"done"}
          placeholder={placeholder}
          style={{ fontSize: fontPixel(16) }}
          className="text-purple-900 text-base font-semibold items-center w-full h-full p-3"
        />
      </View>
      <View className="justify-start pb-5">
        {cardError && (
          <Text
            className="absolute right-5 leading-4 capitalize"
            style={{ fontSize: fontPixel(10), color: errorColor }}
          >
            {cardError}
          </Text>
        )}
      </View>
    </View>
  );
};

export default CardNameTextInput;
