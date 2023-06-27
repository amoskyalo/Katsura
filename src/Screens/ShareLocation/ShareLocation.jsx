import { View, Text, Dimensions, StyleSheet, Image } from "react-native";
import image from "../../../assets/Onboarding/location.png";

const ShareLocation = ({ navigation }) => {
  const { height, width } = Dimensions.get("screen");
  return (
    <View style={{ height, width, position: "relative" }}>
      <Image
        source={image}
        style={[StyleSheet.absoluteFill, { height, width }]}
      />

      <View className="flex-row items-end h-full">
        <View className="px-6 py-8 bg-white w-full space-y-3 rounded-t-3xl">
          <Text className="text-center font-semibold text-2xl">
            Share your location
          </Text>
          <Text className="text-center text-[16px] text-gray-500 font-[500]">
            If we have your location, we can do better job finding you want and
            deliver it.
          </Text>
          <View className="space-y-4 w-full">
            {["YES, SHARE MY LOCATION", "NO, CHOOSE MANUALLY"].map(
              (item, index) => (
                <Text
                  onPress={() => navigation.navigate("home")}
                  key={index}
                  className={`w-full py-3 text-center rounded-lg font-semibold ${
                    index === 0
                      ? `bg-primaryColor text-white`
                      : `text-primaryColor border border-primaryColor`
                  }`}
                >
                  {item}
                </Text>
              )
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default ShareLocation;
