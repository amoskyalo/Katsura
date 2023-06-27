import { View, Text, Image } from "react-native";
import React from "react";


const SearchResultCard = ({ data, width }) => {
    const handleTrimText = (text) => {
        if(text.length > 15){
            return text.slice(0, 15) + '...'
        } return text;
    }


  return (
    <View className="rounded-xl overflow-hidden mb-4" style={{ width }}>
      <Image className="w-full h-24" source={data.image} />
      <View className="bg-white p-2">
        <Text className="font-bold text-[14px]">{handleTrimText(data.name)}</Text>
        <View className="flex-row items-center space-y-1 justify-between">
          <Text className="text-gray-600 text-[12px]">{data.duration}</Text>
          <Text className="text-gray-600 text-[12px]">${data.price}.00</Text>
        </View>
      </View>
    </View>
  );
};

export default SearchResultCard;
