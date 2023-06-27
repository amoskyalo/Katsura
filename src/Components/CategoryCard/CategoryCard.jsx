import { View, Text, Image, TouchableOpacity } from "react-native";

const CategoryCard = ({ data, index, active, pressFunction }) => {
  return (
    <TouchableOpacity
      onPress={pressFunction}
      className={`flex-row items-center py-3 px-4 rounded-xl space-x-2 ${
        active === index ? `bg-primaryColor` : `bg-white`
      }`}
    >
      <View className="bg-white p-1 rounded-lg">
        <Image source={data.image} className="h-5 w-5" />
      </View>
      <Text className={`font-semibold ${index === active ? `text-white` : ``}`}>
        {data.name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
