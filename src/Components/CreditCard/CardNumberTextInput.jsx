import { Text, TextInput, View, Image } from "react-native";
import React, { useState } from "react";

import { fontPixel } from "./Normalize";
import { numberWithSpace } from "./NumberWithSpaces";
import { checkCreditCard } from "./ValidateCard";

const CardNumberTextInput = ({
  updateTextVal,
  focusColor,
  defaultBorderColor,
  label,
  placeholder,
  touched,
  focus,
  errorColor,
  cardErrorr,
  ...props
}) => {
  const [iconName, setIconName] = useState(require("./credit-card.png"));
  const [cardError, setCardError] = useState(null);

  const checkCard = (cardNum) => {
    const { message, type } = checkCreditCard(cardNum);
    setCardError(message);
    if (type === null) {
      setIconName(require("./credit-card.png"));
    } else if (type === "MasterCard") {
      setIconName(require("./mastercard.png"));
    } else if (type === "AmEx") {
      setIconName(require("./american-express.png"));
    } else if (type === "Visa") {
      setIconName(require("./visa.png"));
    } else if (type === "Discover") {
      setIconName(require("./discover.png"));
    } else if (type === "VisaElectron") {
      setIconName(require("./visa-e.png"));
    } else if (type === "Maestro") {
      setIconName(require("./maestro.png"));
    } else if (type === "Solo") {
      setIconName(require("./solo-card.png"));
    } else {
      setIconName(require("./credit-card.png"));
    }
  };

  let validationColor = !touched
    ? defaultBorderColor
    : cardError || cardErrorr
    ? "#FF5A5F"
    : focus
    ? focusColor
    : defaultBorderColor;

  return (
    <View className="w-full justify-start">
      <Text className="text-[#555] capitalize ml-2">{label}</Text>
      <View
        style={{ borderColor: validationColor }}
        className="w-full h-[50px] mt-2 mb-1 flex-row items-center justify-evenly bg-white rounded-xl border "
      >
        <TextInput
          {...props}
          onChangeText={(text) => {
            updateTextVal(numberWithSpace(text));
            checkCard(text);
          }}
          clearButtonMode="while-editing"
          returnKeyLabel={"Next"}
          returnKeyType={"done"}
          keyboardType="number-pad"
          placeholder={placeholder}
          style={{ fontSize: fontPixel(16) }}
          className="text-purple-900 text-base font-semibold items-center w-[90%] h-full p-3"
        />
        <View className="justify-center items-center w-10 h-10 pr-3">
          <Image
            source={iconName}
            style={{
              width: 27,
              height: 27,
              resizeMode: "cover",
            }}
          />
        </View>
      </View>
      <View className="justify-start pb-5">
        <Text
          className="absolute right-5 leading-4 capitalize"
          style={{ fontSize: fontPixel(10), color: errorColor }}
        >
          {cardError || cardErrorr}
        </Text>
      </View>
    </View>
  );
};

export default CardNumberTextInput;
