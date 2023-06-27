import { Pressable, Text } from "react-native";

const SearchFilters = ({ text, index, active, pressFunction }) => {
  return (
    <Pressable
      onPress={pressFunction}
      className={`pb-2 ${
        index === active ? `border-b-4 border-primaryColor` : ""
      }`}
    >
      <Text className="text-white font-bold text-lg">{text}</Text>
    </Pressable>
  );
};

export default SearchFilters;
