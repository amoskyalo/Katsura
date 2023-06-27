import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import chef from "../../../assets/Authentication/chef.png";
import Login from "./Login/Login";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { Pressable } from "react-native";

const Authentication = () => {
  const { height, width } = Dimensions.get("screen");
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  const AuthentcationHomeSeen = () => {
    return (
      <View
        style={{
          height,
          width,
          alignItems: "center",
          paddingHorizontal: 24,
          justifyContent: "space-evenly",
        }}
      >
        <View className="space-y-6">
          <Text className="text-center text-5xl font-bold text-gray-700">
            katsura
          </Text>
          <Image source={chef} className="h-56 mx-auto" />
          <Text className="text-center text-gray-700 text-[16px]">
            All your favourite meals in one place. Enjoy out free delivery and
            track your order.
          </Text>
        </View>

        <View className="space-y-3 w-full">
          {["SIGN IN", "SIGN UP"].map((item, index) => (
            <Text
              onPress={() => navigation.navigate("signIn")}
              key={index}
              className={`w-full py-3 text-center rounded-lg font-semibold text-lg ${
                index === 0
                  ? `bg-primaryColor text-white`
                  : `text-primaryColor border border-primaryColor`
              }`}
            >
              {item}
            </Text>
          ))}
        </View>
      </View>
    );
  };

  const HeaderLeft = () => {
    return (
      <Pressable onPress={() => navigation.navigate("authenticationHome")} className="ml-2 h-10 w-10 p-2 rounded-lg flex-row items-center justify-center bg-primaryColor">
        <ChevronLeftIcon size={24} color="white" />
      </Pressable>
    );
  };
  return (
    <Stack.Navigator initialRouteName="authenticationHome">
      <Stack.Screen
        name="authenticationHome"
        component={AuthentcationHomeSeen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signIn"
        component={Login}
        options={{
          headerShadowVisible: false,
          headerTitle: "SIGN IN",
          headerTitleStyle: {
            color: "black",
            fontWeight: "bold",
            fontSize: 20,
          },
          headerTitleAlign: "center",
          headerLeft: () => <HeaderLeft />,
        }}
      />
    </Stack.Navigator>
  );
};

export default Authentication;
