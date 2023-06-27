import {
  Text,
  StatusBar,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import {
  ChevronDownIcon,
  MapPinIcon,
  BellAlertIcon,
} from "react-native-heroicons/solid";
import { useState } from "react";

import CategoryCard from "../../../Components/CategoryCard/CategoryCard";

import PopularCard from "../../../Components/PopularCard/PopularCard";
import { data, populars } from "../../../_DB/DB";

const HomeBody = () => {
  const [active, setActive] = useState(0);

  return (
    <ScrollView
      contentContainerStyle={{
        marginTop: StatusBar.currentHeight,
      }}
    >
      <View className="flex-row items-center justify-between py-8 px-6">
        <Text></Text>
        <View className="flex-row items-center space-x-2">
          <MapPinIcon color="#0BCE83" size={20} />
          <Text className="font-bold text-lg">Desert Dew</Text>
          <ChevronDownIcon color="#0BCE83" size={15} />
        </View>
        <TouchableOpacity className="h-10 w-10 bg-white p-1 rounded-xl flex-row items-center justify-center">
          <BellAlertIcon size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <View className="px-6">
        <Text className="text-center font-black text-3xl text-black">
          What do you want for <Text className="text-primaryColor">Dinner</Text>
        </Text>
      </View>

      <View className="space-y-4 mt-8">
        <Text className="font-black text-lg px-6">Categories</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 16, paddingHorizontal: 26 }}
        >
          {data.map((item, index) => (
            <CategoryCard
              data={item}
              key={index}
              active={active}
              index={index}
              pressFunction={() => setActive(index)}
            />
          ))}
        </ScrollView>
      </View>

      <View className="mt-8 px-6 pb-8">
      <Text className="font-black text-lg mb-4">Popular</Text>
        {populars.map((popular, index) => (
          <PopularCard data={popular} key={index}/>
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeBody;
