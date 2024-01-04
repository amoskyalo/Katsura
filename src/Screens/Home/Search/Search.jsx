import { View, Text, ScrollView, TextInput, Image } from "react-native";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/solid";
import SearchFilters from "./SearchFilters/SearchFilters";
import Search_Filter from "./SearchFilters/Search_Filter";
import { useState } from "react";

import chicken from "../../../../assets/Search/chicken.png";
import fried from "../../../../assets/Search/fried.png";
import kk from "../../../../assets/Search/kk.png";
import smokey from "../../../../assets/Search/smokey.png";
import snack from "../../../../assets/Search/snack.png";
import straw from "../../../../assets/Search/straw.png";

import breakfast from "../../../../assets/Search/breakfast.png";
import fast from "../../../../assets/Search/fast.png";
import ice from "../../../../assets/Search/ice.png";
import bbq from "../../../../assets/Search/bbq.png";
import japanese from "../../../../assets/Search/japaneese.png";
import sandwich from "../../../../assets/Search/sandwich.png";

import SearchResultCard from "./SearchResultCard/SearchResultCard";
import { TouchableOpacity } from "react-native";
import { populars } from "../../../_DB/DB";
import PopularCard from "../../../Components/PopularCard/PopularCard";
import { MaterialIcons } from "react-native-vector-icons";
import { fontPixel } from "../../../Components/CreditCard/Normalize";
import { useRoute } from "@react-navigation/native";

const Search = () => {
  const route = useRoute();
  const filters = route.params?.food;
  const [active, setActive] = useState(0);
  const [openModal, setOPenModal] = useState(false);
  const [text, setText] = useState();
  const [food, setFood] = useState();

  const searchFood = (value) => {
    const filteredFood = populars.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredFood.length) {
      setFood(filteredFood);
    } else {
      setFood("");
    }
  };
  const enteredValue = (value) => {
    setText(value);
    searchFood(value);
  };

  const clearSearch = () => {
    setText("");
  };

  const data = [
    {
      name: "Chicken Shawarma",
      duration: "5-10mins",
      price: 20,
      image: chicken,
    },
    {
      name: "Fried chicken",
      duration: "45-50mins",
      price: 200,
      image: fried,
    },
    {
      name: "Smokey BBQ",
      duration: "6-10mins",
      price: 15,
      image: smokey,
    },
    {
      name: "Tantalizer kk",
      duration: "4-10mins",
      price: 50,
      image: kk,
    },
    {
      name: "Snack Attack - Adams",
      duration: "45-50mins",
      price: 100,
      image: snack,
    },
    {
      name: "Strawberry smoothie",
      duration: "45-50mins",
      price: 107,
      image: straw,
    },
  ];

  const categories = [
    {
      name: "Breakfast and brunch",
      image: breakfast,
    },
    {
      name: "Fast food",
      image: fast,
    },
    {
      name: "Ice cream & yoghurt",
      image: ice,
    },
    {
      name: "BBQ",
      image: bbq,
    },
    {
      name: "Japanese",
      image: japanese,
    },
    {
      name: "Sandwich",
      image: sandwich,
    },
    {
      name: "BBQ",
      image: bbq,
    },
    {
      name: "Japanese",
      image: japanese,
    },
    {
      name: "Sandwich",
      image: sandwich,
    },
    {
      name: "Fast food",
      image: fast,
    },
  ];

  return (
    <ScrollView
      className="flex-1"
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[1]}
    >
      <View className="bg-primaryDark">
        <View className="px-6 mt-10">
          <Text className="text-white text-xl font-semibold mb-2">Search</Text>
          <View className="flex-row items-center justify-between bg-white mb-4 px-4 rounded-xl">
            <MagnifyingGlassIcon color="gray" size={20} />
            <TextInput
              className="flex-1 py-3 pl-4"
              placeholder="Search for food"
              onChangeText={enteredValue}
              value={text}
            />
            {!text ? (
              <TouchableOpacity onPress={() => setOPenModal((prev) => !prev)}>
                <AdjustmentsHorizontalIcon color="#0BCE83" size={20} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={clearSearch}>
                <MaterialIcons name="clear" size={19} color={"#888"} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
      {openModal && <Search_Filter onPress={() => setOPenModal(false)} />}

      <View className="bg-primaryDark pt-8">
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={{
            gap: 40,
            paddingHorizontal: 24,
          }}
        >
          {["All", "Breakfast", "Fast Food", "Lunch", "Dinner"].map(
            (item, index) => (
              <SearchFilters
                text={item}
                index={index}
                key={index}
                active={active}
                pressFunction={() => setActive(index)}
              />
            )
          )}
        </ScrollView>
      </View>

      {!text ? (
        <>
          {!filters ? (
            <>
              <View className="mt-8">
                <Text className="px-6 font-bold text-xl">
                  Your search history
                </Text>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    paddingHorizontal: 24,
                    marginTop: 8,
                    gap: 16,
                  }}
                >
                  {data.map((item, index) => (
                    <SearchResultCard data={item} key={index} width={150} />
                  ))}
                </ScrollView>
              </View>

              <View className="px-6">
                <Text className="font-bold text-xl">Top categories</Text>
                <View className="flex-row flex-wrap justify-between flex-1 w-full mt-2">
                  {categories.map((item, index) => (
                    <View
                      className="w-[48%] rounded-lg overflow-hidden relative mb-4"
                      key={index}
                    >
                      <Image className="h-28 w-full" source={item.image} />
                      <View
                        style={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
                        className="absolute flex-row items-center justify-center left-0 w-full h-full flex-1 p-2"
                      >
                        <Text className="text-white font-bold text-lg text-center">
                          {item.name}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            </>
          ) : (
            <>
              {filters.length === 0 ? (
                <View className="flex-1 justify-center items-center">
                  <Text className="mt-48" style={{ fontSize: fontPixel(19) }}>
                    Not available at the moment.
                  </Text>
                </View>
              ) : (
                <View className="mt-8 px-6 pb-8">
                  {filters.map((item, index) => (
                    <PopularCard data={item} key={index} />
                  ))}
                </View>
              )}
            </>
          )}
        </>
      ) : (
        <>
          {food.length === 0 ? (
            <View className="flex-1 justify-center items-center">
              <Text className="mt-48" style={{ fontSize: fontPixel(19) }}>
                Not available at the moment.
              </Text>
            </View>
          ) : (
            <View className="mt-8 px-6 pb-8">
              {food.map((item, index) => (
                <PopularCard data={item} key={index} />
              ))}
            </View>
          )}
        </>
      )}
    </ScrollView>
  );
};

export default Search;
