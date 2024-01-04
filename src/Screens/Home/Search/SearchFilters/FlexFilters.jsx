import { Text, TouchableOpacity } from "react-native";

const FlexFilters = ({ text, index, active, pressFunction }) => {
  return (
    <TouchableOpacity
      onPress={pressFunction}
      className={`flex-row items-center py-3 px-4 rounded-3xl space-x-2 ${
        active === index ? `bg-primaryColor` : `bg-white`
      }`}
    >
      <Text className={`font-semibold ${index === active ? `text-white` : ``}`}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default FlexFilters;
