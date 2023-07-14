import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  ChevronLeftIcon,
  TagIcon,
  UserCircleIcon,
} from "react-native-heroicons/outline";

const OrderDetails = ({ route, navigation }) => {
  const item = route.params.item;
  const index = item.id * 1000;
  return (
    <View
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
      }}
    >
      <ScrollView>
        <View className="px-7 pt-4">
          <View className="flex-row items-center pb-2">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ChevronLeftIcon color="black" size={24} />
            </TouchableOpacity>
            <View className="flex-row justify-center w-[93%] items-center">
              <Text className="text-xl font-bold">Order #{index}FF</Text>
            </View>
          </View>
          <Image
            className="h-60 w-full my-3 self-center rounded"
            source={item.image}
          />
          <View className="gap-1">
            <Text className="text-2xl font-bold">{item.name}</Text>
            <Text className="text-base">Order Completed</Text>
            <Text className="text-base">{item.date}</Text>
            <Text className="text-base">At {item.time}</Text>
            <Text className="text-xl font-semibold pt-2">Your Order</Text>
            <Text className="text-base">{item.name}</Text>
            <Text className="text-base">Lemonade</Text>
            <Text className="text-base">{item.count} Item(s)</Text>
            <View className="flex-row pt-3">
              <TagIcon size={20} color="black" />
              <Text className="ml-5">Total : {item.price}</Text>
            </View>
            <View className="flex-row pt-3 mb-6">
              <UserCircleIcon size={20} color="black" />
              <Text className="ml-5">Delivered by Peter Ozenua</Text>
            </View>
            <Text className="text-primaryColor text-[16px] text-center py-3 mb-5 font-semibold border border-gray-300 rounded-lg">
              VIEW RECEIPT
            </Text>
            <Text className="text-primaryColor text-[16px] text-center py-3 mb-12 font-semibold border border-gray-300 rounded-lg">
              RATE DELIVERY
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({});
