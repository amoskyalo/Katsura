import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import facebook from "../../../../assets/Icons/facebook.png";
import apple from "../../../../assets/Icons/apple.png";
import google from "../../../../assets/Icons/google.png";
import { EyeIcon } from "react-native-heroicons/solid";

const Login = ({navigation}) => {
  const { height, width } = Dimensions.get("screen");
  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: "space-between",
        height: height - 100,
        width,
        paddingBottom: 14,
        paddingHorizontal: 24,
        backgroundColor: "white",
      }}
    >
      <View className="space-y-4">
        <Text className="text-center font-bold text-5xl text-gray-700 mt-8">
          katsura
        </Text>
        <Text className="text-2xl font-semibold text-gray-700 text-center">
          Welcome back! Glad to see you again!
        </Text>
      </View>

      <View className="space-y-4">
        <TextInput
          placeholder="Enter your email"
          className="border-gray-200 rounded-lg border-2 py-2 px-4"
        />
        <View className="flex-row items-center px-4 border-2 border-gray-200 rounded-lg">
          <TextInput
            className="flex-1 py-2"
            keyboardType="numeric"
            placeholder="Enter your password"
          />
          <EyeIcon color="gray" size={24} />
        </View>
        <TouchableOpacity>
          <Text className="text-right text-primaryColor font-[500]">
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>

      <Text onPress={() => navigation.navigate("location")} className="text-white bg-primaryColor text-center py-3 font-semibold rounded-lg">
        LOGIN
      </Text>

      <View className="flex-row items-center">
        <View className="w-full flex-1 border-t border-gray-400" />
        <Text className="px-4 text-center text-gray-700 font-bold text-xl">
          OR
        </Text>
        <View className="w-full flex-1 border-t border-gray-400" />
      </View>

      <View className="flex flex-row w-full space-x-[5%]">
        {[facebook, apple, google].map((item, index) => (
          <View
            className="flex-row items-center justify-between bg-gray-100 px-4 py-4 rounded-xl w-[30%]"
            key={index}
          >
            <Image source={item} className="h-6 mx-auto" />
          </View>
        ))}
      </View>

      <Text className="text-center font-semibold text-gray-500">
        Dont have an account? <Text className="text-primaryColor">Sign Up</Text>
      </Text>
    </ScrollView>
  );
};

export default Login;
