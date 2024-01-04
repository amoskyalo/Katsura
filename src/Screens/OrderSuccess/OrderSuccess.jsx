import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Button from "../../Components/Button/Button";

const OrderSuccess = ({ navigation }) => {
  return (
    <View className="flex-1 justify-center items-center">
      <View className="justify-center items-center bg-white w-[80%] h-[70%] rounded-[35px]">
        <Image
          className="w-[70%] h-[30%] my-3"
          source={require("../../../assets/OrderSuccess/Success.png")}
        />
        <View className="justify-center items-center gap-1">
          <Text className="text-2xl font-extrabold">Order Successful !</Text>
          <Text className="text-base font-medium text-gray-700">
            Thanks for your order.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("HomeBody")}
          className="w-[60%] mt-20"
        >
          <Button title="BACK HOME" />
        </TouchableOpacity>
        <TouchableOpacity className="my-4">
          <Text className="text-base font-medium text-primaryColor">
            TRACK ORDER
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderSuccess;

const styles = StyleSheet.create({});
