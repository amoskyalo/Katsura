import {
  Image,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Switch,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Button from "../../Components/Button/Button";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import {
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
} from "react-native-vector-icons";

const CheckOut = ({ route, navigation }) => {
  const item = route.params.item;
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
                          <det.icon
                            name={det.iconName}
                            size={20}
                            color="black"
                          />
                          {typeof det.text === "string" && (
                            <TouchableOpacity>
                              <Text>{det.text}</Text>
                            </TouchableOpacity>
                          )}
                          {typeof det.text !== "string" && (
                            <View className="space-y-3">
                              {convertObjectKeysToArray(det.text).map(
                                (el, i) => (
                                  <Text key={i}>{det.text[`${el}`]}</Text>
                                )
                              )}
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

        <View className="bg-white rounded-t-[50px] px-6 space-y-3">
          <View className="items-center">
            <View className="border-t-[4px] w-14 border-t-gray-200" />
          </View>
          <View className="flex flex-row justify-between items-center pt-4">
            <View className="flex-row items-center gap-2 ">
              <Text className="text-base font-medium">Subtotal</Text>
              <AntDesign name="questioncircle" size={15} color="black" />
            </View>
            <Text className="text-base font-medium">{item.price}</Text>
          </View>
          <View className="flex flex-row justify-between items-center pb-4 border-b border-b-gray-200">
            <Text className="text-base font-medium">
              Estimated Delivery & Handling
            </Text>
            <Text className="text-base font-medium">Free</Text>
          </View>
          <View className="flex flex-row justify-between items-center mb-6">
            <Text className="text-xl font-semibold ">Total</Text>
            <Text className="text-xl text-primaryColor font-semibold">
              {item.price}
            </Text>
          </View>
          <TouchableOpacity onPress={HandleOrder} className="my-3">
            <Button title="PLACE ORDER" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CheckOut;
