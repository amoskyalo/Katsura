import { View, Text, Image } from "react-native";
import React from "react";

const OrdersCard = ({ data }) => {
  return (
    <View className="flex-row items-center p-2 bg-white rounded-xl mb-4">
      <Image className="h-16 w-[20%] rounded-lg" source={data.image} />
      <View className="flex-1 ml-4">
        <Text className="font-bold text-lg">{data.name}</Text>
        <Text className="text-gray-500 font-[500]">{data.description}</Text>
        <Text className="font-semibold">{data.date} ~ completed</Text>
      </View>
    </View>
  );
};

export default OrdersCard;
