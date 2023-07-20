import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { Image } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { Alert } from "react-native";
import { Linking } from "react-native";
import { fontPixel } from "./Normalize";
import { ToastAndroid } from "react-native";

function ScanCard() {
  const [useCamera, setUseCamera] = useState(false);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
      allowEditing: true,
      quality: 1,
    });
    setUseCamera(false);

    if (!result.canceled) {
      // setImage(result.assets[0].uri);
      alert("No card Details found!");
    } else {
      ToastAndroid.show("You didn't select any image.", ToastAndroid.SHORT);
    }
  };

  const TakePhoto = () => {
    setUseCamera((prev) => !prev);
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      if (!status === "granted") {
        Alert.alert(
          "Allow Permissions",
          "Please allow camera and microphone permission to access camera features",
          [
            {
              text: "Go to Settings",
              onPress: () => Linking.openSettings(),
            },
            {
              text: "Cancel",
            },
          ]
        );
      }
    })();
  }, []);
  return (
    <View className="justify-center items-center mb-3">
      <TouchableOpacity
        className="bg-primaryColor flex-row justify-center items-center w-[50%] rounded-full  p-2"
        onPress={pickImageAsync}
      >
        <Text
          style={{ fontSize: fontPixel(21) }}
          className="text-lg text-center text-white"
        >
          Pick from gallary
        </Text>
      </TouchableOpacity>

      {useCamera ? (
        <View>
          <Camera
            className="h-[230px] w-[340px] my-6 border-4 rounded"
            type={CameraType.back}
            ratio="1:1"
          >
            <View />
          </Camera>
        </View>
      ) : (
        <>
          <Image
            className="h-[230px] w-[340px] my-6 border-4 rounded-lg"
            source={require("./card.png")}
          />
        </>
      )}
      <TouchableOpacity onPress={TakePhoto}>
        <Image className="w-12 h-12" source={require("./capture.png")} />
      </TouchableOpacity>
    </View>
  );
}

export default ScanCard;
