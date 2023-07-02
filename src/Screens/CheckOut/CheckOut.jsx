import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  Pressable,
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

          <View className="flex flex-row justify-between items-center px-2 mt-6">
            <Text className="text-black text-lg font-bold">Payment method</Text>
            <TouchableOpacity>
              <Text className="text-purple-700 font-semibold">CHANGE</Text>
            </TouchableOpacity>
          </View>
          <View className="gap-4 my-1 px-3">
            <View className="flex-row justify-between items-center">
              <View className="flex-row gap-5">
                <Feather name="credit-card" size={20} color="black" />
                <Text>**** **** **** 4747</Text>
              </View>
              <AntDesign name="check" size={22} color="black" />
            </View>
            <View className="flex-row ">
              <FontAwesome name="money" size={20} color="black" />
              <Text className="pl-6">Pay on delivery</Text>
            </View>
            <View className="flex-row ">
              <AntDesign name="apple1" size={20} color="black" />
              <Text className="pl-6">**** 7348</Text>
            </View>
          </View>
          <View className="flex flex-row justify-between items-center px-2 mt-6">
            <Text className="text-black text-lg font-bold">
              Deliver address
            </Text>
            <TouchableOpacity>
              <Text className="text-purple-700 font-semibold">CHANGE</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row gap-2 px-1">
            <Feather
              style={{ paddingLeft: 10, paddingTop: 8 }}
              name="home"
              size={20}
              color="black"
            />
            <View className="gap-2  px-2">
              <Text>John Doe</Text>
              <Text>Cesu31k-25.st, S/A Chili</Text>
              <Text>Desert Dew</Text>
              <Text>LV-1012</Text>
              <Text>Latvia</Text>
            </View>
          </View>
          <View className="flex flex-row justify-between items-center px-2 mt-6">
            <Text className="text-black text-lg font-bold">
              Delivery options
            </Text>
            <TouchableOpacity>
              <Text className="text-purple-700 font-semibold">CHANGE</Text>
            </TouchableOpacity>
          </View>
          <View className="gap-4 my-1 px-3">
            <View className="flex-row ">
              <MaterialIcons name="directions-walk" size={20} color="black" />
              <Text className="pl-6">I'll pick it up myself</Text>
            </View>
            <View className="flex-row justify-between items-center">
              <View className="flex-row ">
                <MaterialIcons name="directions-bike" size={20} color="black" />
                <Text className="pl-6">By courier</Text>
              </View>
              <AntDesign name="check" size={22} color="black" />
            </View>
            <View className="flex-row ">
              <MaterialCommunityIcons name="drone" size={20} color="black" />
              <Text className="pl-6">By Drone</Text>
            </View>
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
          <Pressable className="my-3">
            <Button title="PLACE ORDER" />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({});
