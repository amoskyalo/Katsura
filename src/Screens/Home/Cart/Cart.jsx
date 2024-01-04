import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import straw from "../../../../assets/Burger/beef.png";
import pizza from "../../../../assets/Search/pizza.png";
import CartCard from "../../../Components/CartCard/CartCard";
import OrdersCard from "../../../Components/OrdersCard/OrdersCard";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, deleteItem } from "../../../Features/Cart/CartSlice";
import { TrashIcon } from "react-native-heroicons/outline";
import Button from "../../../Components/Button/Button";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { clearOrder, deleteOrder } from "../../../Features/Order/OrderSlice";

const Cart = ({ navigation }) => {
  const [active, setActive] = useState(0);

  const { items } = useSelector((state) => state.cart);

  const { orders } = useSelector((state) => state.order);

  const dispatch = useDispatch();

  const ClearCart = () => {
    if (!items.length) {
      ToastAndroid.show("Cart is empty!", ToastAndroid.SHORT);
    }
    dispatch(clearCart());
  };
  const ClearOrders = () => {
    if (!orders.length) {
      ToastAndroid.show("You have no order!", ToastAndroid.SHORT);
    }
    dispatch(clearOrder());
  };

  let row = [];
  let prevOpenedRow;

  const renderItem = (item, index) => {
    const ViewDetails = () => {
      if (active === 0) {
        navigation.navigate("checkout", { item });
      } else {
        navigation.navigate("orderdetails", { item });
      }
    };

    const closeRow = (index) => {
      if (prevOpenedRow && prevOpenedRow !== row[index]) {
        prevOpenedRow.close();
      }
      prevOpenedRow = row[index];
    };

    const deleteCartItem = () => {
      if (active === 0) {
        dispatch(deleteItem(item.id));
        closeRow();
      } else {
        dispatch(deleteOrder(item.id));
        closeRow();
      }
    };
    const renderRightActions = (progress, dragX) => {
      // const scale = dragX.interpolate({
      //   inputRange: [-100, 0],
      //   outputRange: [1, 0],
      //   // extrapolate: "clamp",
      // });

      // const Styte = {
      //   transform: [{ scale }],
      // };
      return (
        <TouchableOpacity
          onPress={deleteCartItem}
          className="bg-[#f95151] justify-center items-center ml-2 w-[60px] h-[83px] rounded-xl"
        >
          <View
            style={{
              margin: 0,
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <TrashIcon
              style={{ alignSelf: "center" }}
              size={20}
              color="white"
            />
            <Animated.Text className="text-white">Delete</Animated.Text>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <GestureHandlerRootView key={index}>
        <Swipeable
          renderRightActions={(progress, dragX) =>
            renderRightActions(progress, dragX)
          }
          onSwipeableOpen={() => closeRow(index)}
          ref={(ref) => (row[index] = ref)}
          rightThreshold
        >
          <TouchableOpacity onPress={ViewDetails}>
            {active == 0 ? (
              <CartCard data={item} />
            ) : (
              <OrdersCard key={index} data={item} />
            )}
          </TouchableOpacity>
        </Swipeable>
      </GestureHandlerRootView>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 24,
      }}
    >
      <View className="bg-gray-200 p-2 rounded-full flex-row justify-between mt-4">
        {["Cart", "Orders"].map((item, index) => (
          <Text
            onPress={() => setActive(index)}
            key={index}
            className={`w-1/2 py-2 text-center rounded-full font-semibold text-lg ${
              index === active ? `bg-white text-primaryColor` : ``
            }`}
          >
            {item}
          </Text>
        ))}
      </View>

      {active === 0 && (
        <View>
          {items.length === 0 ? (
            <View className="items-center justify-center h-[85%]">
              <Text className="text-base italic">Your bag is empty.</Text>
            </View>
          ) : (
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ marginTop: 24 }}
            >
              {items.map((item, index) => renderItem(item, index))}
              <TouchableOpacity onPress={ClearCart} className="mt-3 mb-[125px]">
                <Text className="text-white bg-[#f95151] text-[16px] text-center py-3 font-semibold rounded-lg">
                  CLEAR CART
                </Text>
              </TouchableOpacity>
            </ScrollView>
          )}
        </View>
      )}
      {active === 1 && (
        <View>
          {orders.length === 0 ? (
            <View className="items-center justify-center h-[85%]">
              <Text className="text-base italic">You have no order.</Text>
            </View>
          ) : (
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ marginTop: 24 }}
            >
              {orders.map((item, index) => renderItem(item, index))}
              <TouchableOpacity
                onPress={ClearOrders}
                className="mt-3 mb-[125px]"
              >
                <Text className="text-white bg-[#f95151] text-[16px] text-center py-3 font-semibold rounded-lg">
                  CLEAR ORDERS
                </Text>
              </TouchableOpacity>
            </ScrollView>
          )}
        </View>
      )}
    </View>
  );
};

export default Cart;
