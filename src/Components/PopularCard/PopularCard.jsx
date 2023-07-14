import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const PopularCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate("order", { id: data.id })}
      className="rounded-xl overflow-hidden mb-6"
    >
      <Image source={data.image} className="w-full h-40" />
      <View className="bg-white px-4 py-2 flex-row justify-between items-center">
        <View>
          <Text className="font-bold text-lg">{data.name}</Text>
          <Text className="text-sm font-[500] text-gray-600">
            Burgers.Fast Food
          </Text>
        </View>
        <View>
          <View className="flex-row items-center space-x-3">
            <StarIcon color="#0BCE83" size={18} />
            <Text className="text-sm text-gray-600 font-[500]">4.8</Text>
          </View>
          <Text className="text-sm text-gray-600 font-[500]">10mins</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PopularCard;
