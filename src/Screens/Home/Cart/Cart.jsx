import { View, Text, StatusBar, ScrollView } from "react-native";
import React, { useState } from "react";
import straw from "../../../../assets/Burger/beef.png";
import pizza from "../../../../assets/Search/pizza.png";
import CartCard from "../../../Components/CartCard/CartCard";
import OrdersCard from "../../../Components/OrdersCard/OrdersCard";

const Cart = () => {
  const [active, setActive] = useState(0);
  const data = [
    {
      name: "Beef Burger",
      description: "Beef patty and special sauce",
      count: 2,
      price: "$200.00",
      image: straw,
    },
    {
      name: "Pizza",
      description: "Pizza patty and special sauce",
      count: 1,
      price: "$600.00",
      image: pizza,
    },
  ];

  const orders = [
    {
      name: "Beef Burger",
      description: "Beef patty and special sauce",
      image: straw,
      date: "2 March 2023",
    },
    {
      name: "Pizza",
      description: "Pizza patty and special sauce",
      date: "3rd May 2023",
      image: pizza,
    },
  ];

  return (
    <View style={{ marginTop: StatusBar.currentHeight, paddingHorizontal: 24 }}>
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
        <ScrollView contentContainerStyle={{ marginTop: 24 }}>
          {data.map((item, index) => (
            <CartCard key={index} data={item} />
          ))}
        </ScrollView>
      )}

      {active === 1 && (
        <ScrollView contentContainerStyle={{ marginTop: 24 }}>
          {orders.map((item, index) => (
            <OrdersCard key={index} data={item} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Cart;
