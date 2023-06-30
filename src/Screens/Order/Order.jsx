import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ToastAndroid
} from "react-native";
import { populars } from "../../_DB/DB";
import {
  PlusIcon,
  MinusIcon,
  ChevronRightIcon,
} from "react-native-heroicons/solid";
import delivery from "../../../assets/Order/delivery.png";
import rating from "../../../assets/Order/rating.png";
import fire from "../../../assets/Order/fire.png";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import RadioButtonRN from "radio-buttons-react-native";
import Button from "../../Components/Button/Button";
import { useDispatch } from "react-redux";
import { addItem } from "../../Features/Cart/CartSlice";


const Order = ({ route }) => {
  const [count, setCount] = useState(1);
  const { id } = route.params;
  const { width } = Dimensions.get("screen");
  const thisOrder = populars.find((item) => item.id === id);


  const dispatch = useDispatch()

  const handleMinusCount = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      ToastAndroid.show("Items count cannot be 0!", ToastAndroid.SHORT)
    }
  };

  const HandleCart=()=>{
    dispatch(addItem({image:thisOrder.image,name:thisOrder.name,description:thisOrder.subText,count:count,
      price:(thisOrder.price * count).toLocaleString("en", {
                  style: "currency",
                  currency: "usd",
                })}))
                ToastAndroid.show("Item added to cart", ToastAndroid.SHORT)

  
  }

  return (
    <ScrollView
      stickyHeaderIndices={[0]}
      contentContainerStyle={{ backgroundColor: "white" }}
      showsVerticalScrollIndicator={false}
    >
      <Image
        className="h-80 w-full"
        preserveAspectRatio="xMidYMid slice"
        source={thisOrder.image}
      />

      <View
        style={{
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          backgroundColor: "white",
          width,
          marginTop: -35,
          zIndex: 99,
          paddingBottom: 10,
        }}
      >
        <View className="absolute left-0 -top-6 w-full">
          <View
            style={[
              {
                alignSelf: "center",
                columnGap: 20,
                paddingVertical: 8,
                borderRadius: 16,
                paddingHorizontal: 10,
              },
              styles.flexRow,
              styles.shadow,
            ]}
          >
            <TouchableOpacity  onPress={handleMinusCount}>
            <MinusIcon size={20} color="black"  />
            </TouchableOpacity>
            <Text className="text-2xl font-bold">{count}</Text>
            <TouchableOpacity  onPress={() => setCount((prev)=>prev + 1)}>
            <PlusIcon
              size={20}
              color="black"
              
            />
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-8">
          <View className="space-y-1 px-6">
            <View className="flex-row items-start justify-between space-x-6">
              <Text className="font-bold text-2xl flex-1">{thisOrder.name}</Text>
              <Text className="font-bold text-2xl">
                {(thisOrder.price * count).toLocaleString("en", {
                  style: "currency",
                  currency: "usd",
                })}
              </Text>
            </View>
            <Text className="text-[16px] text-gray-600">
              {thisOrder.subText}
            </Text>
          </View>

          <View className="flex-row justify-between mt-6 px-6">
            {[
              { image: delivery, name: "Free" },
              { image: fire, name: "kcal" },
              { image: rating, name: "4.8" },
            ].map((item, index) => (
              <View
                style={[
                  {
                    columnGap: 10,
                    padding: 10,
                    borderRadius: 16,
                    width: "30%",
                  },
                  styles.flexRow,
                  styles.shadow,
                ]}
                key={index}
              >
                <Image source={item.image} className="h-8 w-8" />
                <Text className="text-lg font-bold">{item.name}</Text>
              </View>
            ))}
          </View>

          <View className="mt-8">
            <Text className="font-semibold text-xl px-6">Ingredients</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                gap: 16,
                paddingHorizontal: 24,
                marginTop: 24,
              }}
            >
              {[
                thisOrder.ingridients.map((el, i) => (
                  <View
                    className="w-[75px] py-4 rounded-xl space-y-1 bg-gray-200"
                    key={i}
                  >
                    <Image source={el.image} className="h-6 w-6 mx-auto" />
                    <Text className="font-semibold text-center text-gray-600">
                      {el.name}
                    </Text>
                  </View>
                )),
              ]}
            </ScrollView>
          </View>

          <View className="px-6 mt-6">
            <Text className="font-semibold text-xl">Accompaniment</Text>
            <RadioButtonRN
              data={[
                { label: "French Fries" },
                { label: "Masala Fries" },
                { label: "Spicy Fries" },
              ]}
              box={false}
              style={{ marginLeft: -12 }}
              textStyle={{ fontWeight: "normal", fontSize: 16, color: "gray" }}
              activeColor="#0BCE83"
              initial={1}
            />
          </View>

          <View className="px-6 mt-6 space-y-2">
            {[
              "Leave a note for the kitchen",
              "Allergies and contact details",
            ].map((el, i) => (
              <TouchableOpacity className="flex-row justify-between" key={i}>
                <Text className="text-[16px] text-gray-500">
                  {el}
                </Text>
                <ChevronRightIcon size={20} color="gray" />
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity onPress={HandleCart} className="mt-8 px-6">
            <Button title="ADD TO CART" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Order;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.0,
    shadowRadius: 1.0,
    elevation: 24,
  },

  flexRow: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
