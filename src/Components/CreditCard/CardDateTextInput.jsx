import { Text, TextInput, View } from "react-native";
import React from "react";

import { fontPixel, widthPixel } from "./Normalize";
import { formatCardDateString } from "./NumberWithSpaces";

const CardDateTextInput = ({
  updateDate,
  defaultBorderColor,
  cardError,
  errorColor,
  focus,
  focusColor,
  touched,
  label,
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
    <View style={{ width: widthPixel(180) }}>
      <Text className="text-[#555] capitalize ml-2">{label}</Text>
      <View
        style={{ borderColor: validationColor }}
        className="w-[90%] h-[50px] mt-2 bg-white rounded-xl border "
      >
        <TextInput
          {...props}
          maxLength={5}
          onChangeText={(text) => {
            updateDate(formatCardDateString(text));
          }}
          clearButtonMode="while-editing"
          returnKeyLabel={"Next"}
          returnKeyType={"done"}
          keyboardType="number-pad"
          placeholder={placeholder}
          style={{ fontSize: fontPixel(16) }}
          className="text-purple-900 font-semibold items-center w-full h-full p-3"
        />
      </View>
      <View className="justify-start pb-5">
        {cardError && (
          <Text
            className="absolute right-9 leading-4 capitalize"
            style={{ fontSize: fontPixel(10), color: errorColor }}
          >
            {cardError}
          </Text>
        )}
      </View>
    </View>
  );
};

export default CardDateTextInput;
