import { Text, TextInput, View } from "react-native";
import React from "react";

import { fontPixel, widthPixel } from "./Normalize";

const CardCVCTextInput = ({
  updateCVC,
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
    <View style={{ width: widthPixel(180) }} className="items-end">
      <Text className="text-[#555] self-start ml-5">{label}</Text>
      <View
        style={{ borderColor: validationColor }}
        className="w-[90%] h-[50px] mt-2 bg-white rounded-xl border"
      >
        <TextInput
          {...props}
          maxLength={3}
          onChangeText={(text) => {
            updateCVC(text);
          }}
          clearButtonMode="while-editing"
          returnKeyLabel={"Next"}
          returnKeyType={"done"}
          keyboardType="number-pad"
          placeholder={placeholder}
          className="text-purple-900 text-base font-semibold items-center w-full h-full p-3"
          style={{ fontSize: fontPixel(16) }}
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

export default CardCVCTextInput;
