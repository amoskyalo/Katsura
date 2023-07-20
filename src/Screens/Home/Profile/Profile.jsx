import { View, Text, Image, StatusBar } from "react-native";
import React from "react";
import {
  TagIcon,
  UserIcon,
  CreditCardIcon,
  Cog8ToothIcon,
  ExclamationCircleIcon,
  QuestionMarkCircleIcon,
  SunIcon,
} from "react-native-heroicons/outline";

const Profile = () => {
  const data = [
    {
      name: "Profile",
      icon: UserIcon,
    },
    {
      name: "Payment",
      icon: CreditCardIcon,
    },
    { name: "Promo codes", icon: TagIcon },
    {
      name: "Settings",
      icon: Cog8ToothIcon,
    },
    {
      name: "About",
      icon: ExclamationCircleIcon,
    },
    {
      name: "Help",
      icon: QuestionMarkCircleIcon,
    },
    {
      name: "Theme",
      icon: SunIcon,
    },
  ];

  return (
    <View
      style={{
        marginTop: StatusBar.currentHeight,
        flex: 1,
        paddingHorizontal: 24,
      }}
    >
      <View className="flex-row mt-8">
        <Image
          className="h-12 w-12 rounded-full"
          source={{
            uri: "data:image/jpeg;base64,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",
          }}
        />
        <View className="ml-4">
          <Text className="font-bold text-lg">Amos Kyalo</Text>
          <Text className="text-[12px] text-gray-500">amoskyalo@gmail.com</Text>
        </View>
      </View>

      <View className="mt-8">
        {data.map((item, index) => (
          <View className="flex-row items-center mb-8" key={index}>
            <item.icon color="black" size={24} />
            <Text className="ml-4 font-semibold text-[18px]">{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Profile;
