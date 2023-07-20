import { Modal, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  XCircleIcon,
  HeartIcon,
  TagIcon,
} from "react-native-heroicons/outline";
import FlexDisplay from "../../../../Components/FlexDisplay/FlexDisplay";
import { ScrollView } from "react-native-gesture-handler";
import FlexFilters from "./FlexFilters";
import { StarIcon } from "react-native-heroicons/solid";
import Button from "../../../../Components/Button/Button";
import { AntDesign } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import { populars } from "../../../../_DB/DB";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Search_Filter = ({ onPress }) => {
  const navigation = useNavigation();

  const [activePopular, setActivePopular] = useState();
  const [activePrice, setActivePrice] = useState();
  const [activeDelTime, setActiveDelTime] = useState();
  const [activeDietary, setActiveDietary] = useState();
  const [foodFiltered, setFoodFilterd] = useState();

  const [index, setIndex] = useState({
    popular: null,
    price: null,
    delivery_time: null,
    dietary: null,
    rating: null,
  });

  const PersistFilters = async () => {
    try {
      const jsonvalue = JSON.stringify(index.popular);
      await AsyncStorage.setItem("popular", jsonvalue);
      const jsonvalue1 = JSON.stringify(index.price);
      await AsyncStorage.setItem("price", jsonvalue1);
      const jsonvalue2 = JSON.stringify(index.delivery_time);
      await AsyncStorage.setItem("delivery_time", jsonvalue2);
      const jsonvalue3 = JSON.stringify(index.dietary);
      await AsyncStorage.setItem("dietary", jsonvalue3);
    } catch (err) {
      console.log(err);
    }
  };

  const GetPersistedFilters = async () => {
    try {
      const popular = await AsyncStorage.getItem("popular");
      if (popular != null) {
        setActivePopular(JSON.parse(popular));
      } else {
        null;
      }
      const price = await AsyncStorage.getItem("price");
      if (price != null) {
        setActivePrice(JSON.parse(price));
      } else {
        null;
      }
      const delivery_time = await AsyncStorage.getItem("delivery_time");
      if (delivery_time != null) {
        setActiveDelTime(JSON.parse(delivery_time));
      } else {
        null;
      }
      const dietary = await AsyncStorage.getItem("dietary");
      if (dietary != null) {
        setActiveDietary(JSON.parse(dietary));
      } else {
        null;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetPersistedFilters();
  }, []);

  const Filters = [
    {
      text: "Deals",
      icon: TagIcon,
      Icon: AntDesign,
      iconName: "check",
    },
    {
      text: "For you",
      icon: HeartIcon,
      Icon: AntDesign,
      iconName: "check",
    },
  ];
  const Dietary = [
    {
      text: "Vegetarian",
      Icon: AntDesign,
      iconName: "check",
    },
    {
      text: "Vegan",
      Icon: AntDesign,
      iconName: "check",
    },
    {
      text: "Gluten-free",
      Icon: AntDesign,
      iconName: "check",
    },
  ];

  const Star = [
    {
      icon: StarIcon,
    },
    {
      icon: StarIcon,
    },
    {
      icon: StarIcon,
    },
    {
      icon: StarIcon,
    },
    {
      icon: StarIcon,
    },
  ];

  const ClearAll = () => {
    setActivePopular();
    setActivePrice();
    setActiveDelTime();
    setActiveDietary();

    try {
      AsyncStorage.clear();
    } catch (err) {
      console.log(err);
    }

    navigation.navigate("search", { food: "" });
    onPress();
  };

  const ApplyFilters = () => {
    onPress();
    PersistFilters();
    navigation.navigate("search", { food: foodFiltered });
  };

  return (
    <Modal statusBarTranslucent={false} transparent onRequestClose={onPress}>
      <ScrollView className="flex-1 bg-[#f2f2f2] px-6 py-4">
        <View className="flex-row items-center justify-between">
          <View className="flex-row justify-center w-[93%] items-center">
            <Text className="text-2xl font-bold">Search Filters</Text>
          </View>
          <TouchableOpacity onPress={onPress}>
            <XCircleIcon color={"#000"} />
          </TouchableOpacity>
        </View>
        <Text className="text-lg text-[#777] mt-2">Popular</Text>
        {Filters.map((det, i) => (
          <FlexDisplay className={"my-1"} key={i}>
            <View className={"flex-row gap-4"}>
              <det.icon size={24} color="black" />
              {typeof det.text === "string" && (
                <TouchableOpacity
                  onPress={() => {
                    setActivePopular(i);
                    setIndex({ ...index, popular: i });
                    const filteredFood = populars.filter(
                      (data) => data.popular === det.text
                    );
                    if (filteredFood.length) {
                      setFoodFilterd(filteredFood);
                    } else {
                      setFoodFilterd("");
                    }
                  }}
                >
                  <Text className="text-lg font-semibold">{det.text}</Text>
                </TouchableOpacity>
              )}
            </View>
            <det.Icon
              name={det.iconName}
              size={20}
              color={activePopular === i ? "#000" : "#f2f2f2"}
            />
          </FlexDisplay>
        ))}
        <View className="space-y-2">
          <Text className="text-lg text-[#777]">Price</Text>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={{
              gap: 20,
              paddingHorizontal: 2,
            }}
          >
            {[13, 20, 30, 40].map((item, i) => (
              <FlexFilters
                text={`$${item}`}
                index={i}
                key={i}
                active={activePrice}
                pressFunction={() => {
                  setActivePrice(i);
                  setIndex({ ...index, price: i });
                  const filteredFood = populars.filter(
                    (data) => data.price === item
                  );
                  if (filteredFood.length) {
                    setFoodFilterd(filteredFood);
                  } else {
                    setFoodFilterd("");
                  }
                }}
              />
            ))}
          </ScrollView>
        </View>
        <View className="space-y-2 mt-3">
          <Text className="text-lg text-[#777]">Delivery time</Text>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={{
              gap: 20,
              paddingHorizontal: 2,
            }}
          >
            {["10 mins", "20 mins", "30 mins"].map((item, i) => (
              <FlexFilters
                text={item}
                index={i}
                key={i}
                active={activeDelTime}
                pressFunction={() => {
                  setActiveDelTime(i);
                  setIndex({ ...index, delivery_time: i });
                  const filteredFood = populars.filter(
                    (data) => data.delivery_time === item
                  );
                  if (filteredFood.length) {
                    setFoodFilterd(filteredFood);
                  } else {
                    setFoodFilterd("");
                  }
                }}
              />
            ))}
          </ScrollView>
        </View>
        <Text className="text-lg text-[#777] my-2">Dietary</Text>
        {Dietary.map((det, i) => (
          <FlexDisplay key={i}>
            <TouchableOpacity
              onPress={() => {
                setActiveDietary(i);
                setIndex({ ...index, dietary: i });
                const filteredFood = populars.filter(
                  (data) => data.dietary === det.text
                );
                if (filteredFood.length) {
                  setFoodFilterd(filteredFood);
                } else {
                  setFoodFilterd("");
                }
              }}
            >
              <Text className="text-lg font-semibold mb-[10px]">
                {det.text}
              </Text>
            </TouchableOpacity>
            <det.Icon
              name={det.iconName}
              size={20}
              color={activeDietary === i ? "#000" : "#f2f2f2"}
            />
          </FlexDisplay>
        ))}
        <View className="space-y-1">
          <Text className="text-lg text-[#777] mb-1">Ratings</Text>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={{
              gap: 20,
              paddingHorizontal: 2,
            }}
          >
            {Star.map((det, i) => (
              <View className={"flex-row gap-1"} key={i}>
                <det.icon size={24} color={"#999"} />
              </View>
            ))}
          </ScrollView>
        </View>
        <TouchableOpacity onPress={ApplyFilters} className="mt-7">
          <Button title={"APPLY"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ClearAll}
          className="justify-center items-center py-3 mt-4"
        >
          <Text className="text-primaryColor font-semibold">CLEAR ALL</Text>
        </TouchableOpacity>
      </ScrollView>
    </Modal>
  );
};

export default Search_Filter;
