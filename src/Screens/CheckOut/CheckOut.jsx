import {
  Image,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Switch,
  Pressable,
} from "react-native";
import {
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
} from "react-native-vector-icons";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { ScrollView } from "react-native-gesture-handler";
import React from "react";
import Button from "../../Components/Button/Button";
import FlexDisplay from "../../Components/FlexDisplay/FlexDisplay";

const CheckOut = ({ route, navigation }) => {
  const item = route.params.item;

  const userDetailsInfo = [
    {
      name: "Payment method",
      details: [
        {
          text: "**** **** **** 4747",
          icon: Feather,
          iconName: "credit-card",
        },
        {
          text: "Pay on delivery",
          icon: FontAwesome,
          iconName: "money",
        },
        {
          text: "**** 7348",
          icon: AntDesign,
          iconName: "apple1",
        },
      ],
    },
    {
      name: "Delivery address",
      details: [
        {
          text: {
            name: "John Doe",
            adrress: "Cesu31k-25.st, S/A Chili",
            street: "LV-1012",
            streetName: "Latvia",
          },
          icon: MaterialIcons,
          iconName: "directions-walk",
        },
      ],
    },
    {
      name: "Delivery options",
      details: [
        {
          text: "I'll pick up myself",
          icon: MaterialIcons,
          iconName: "directions-walk",
        },
        {
          text: "By courier",
          icon: MaterialIcons,
          iconName: "directions-bike",
        },
        {
          text: "By drone",
          icon: MaterialCommunityIcons,
          iconName: "drone",
        },
      ],
    },
  ];

  const Card = ({ heading, children, ...props }) => {
    return (
      <View {...props}>
        <FlexDisplay>
          <Text className="text-black text-lg font-bold">{heading}</Text>
          <TouchableOpacity>
            <Text className="text-purple-700 font-semibold">CHANGE</Text>
          </TouchableOpacity>
        </FlexDisplay>
        {children}
      </View>
    );
  };

  const convertObjectKeysToArray = (obj) => {
    var keys = [];
    for (let key of Object.keys(obj)) {
      keys.push(key);
    }
    return keys;
  };

  return (
    <View
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeftIcon
            style={{ paddingLeft: 24, marginTop: 20, marginLeft: 20 }}
            color="black"
            size={28}
          />
        </TouchableOpacity>
        <View className="px-6 mb-8">
          <View className="flex-row items-center p-2 bg-white rounded-xl mt-6 mb-4">
            <Image className="h-16 w-[20%] rounded-lg" source={item.image} />
            <View className="flex-1 ml-4">
              <Text className="font-bold text-lg">{item.name}</Text>
              <Text className="text-gray-500 font-[500]">
                {item.description}
              </Text>
              <Text className="font-semibold">
                {item.count} item ~ {item.price}
              </Text>
            </View>
          </View>

          <View className="space-y-10 mt-5">
          {userDetailsInfo.map((info, i) => (
            <Card heading={info.name} key={i}>
              <View className="space-y-4 mt-6">
                {info.details.map((det, i) => (
                  <FlexDisplay key={i}>
                    <FlexDisplay key={i}>
                      <View className="flex-row gap-5">
                        <det.icon name={det.iconName} size={20} color="black" />
                        {typeof det.text === "string" && (
                          <TouchableOpacity>
                            <Text>{det.text}</Text>
                          </TouchableOpacity>
                        )}
                        {typeof det.text !== "string" && (
                          <View className="space-y-3">
                            {convertObjectKeysToArray(det.text).map((el, i) => (
                              <Text key={i}>{det.text[`${el}`]}</Text>
                            ))}
                          </View>
                        )}
                      </View>
                      {i === 0 && typeof det.text === "string" && (
                        <AntDesign name="check" size={22} color="black" />
                      )}
                    </FlexDisplay>
                  </FlexDisplay>
                ))}
              </View>
            </Card>
          ))}
          </View>
          
          <View className="flex flex-row justify-between items-center px-2 mt-6">
            <Text className="text-black text-lg font-bold">
              Non-contact-delivery
            </Text>
            <Switch />
          </View>
        </View>

        <View className="bg-white rounded-t-[50px] px-8 gap-3">
          <View className="items-center">
            <View className="border-t-[4px] w-14 border-t-gray-200" />
          </View>
          <FlexDisplay className="pt-4">
            <FlexDisplay className="flex-row items-center gap-2 ">
              <Text className="text-base font-medium">Subtotal</Text>
              <AntDesign name="questioncircle" size={15} color="black" />
            </FlexDisplay>
            <Text className="text-base font-medium">{item.price}</Text>
          </FlexDisplay>
          <View className="flex flex-row justify-between items-center pb-4 border-b border-b-gray-200">
            <Text className="text-base font-medium">
              Estimated Delivery & Handling
            </Text>
            <Text className="text-base font-medium">Free</Text>
          </View>
          <FlexDisplay className="mb-6">
            <Text className="text-xl font-semibold ">Total</Text>
            <Text className="text-xl text-primaryColor font-semibold">
              {item.price}
            </Text>
          </FlexDisplay>
          <Pressable className="my-3">
            <Button title="PLACE ORDER" />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default CheckOut;
