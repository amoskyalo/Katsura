import "react-native-gesture-handler";
import Onboarding from "./src/Screens/Onboarding/Onboarding";
import Authentication from "./src/Screens/Authentication/Authentication";
import ShareLocation from "./src/Screens/ShareLocation/ShareLocation";
import Home from "./src/Screens/Home/Home";
import Order from "./src/Screens/Order/Order";
import CheckOut from "./src/Screens/CheckOut/CheckOut";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { persistor, store } from "./Store";
import { PersistGate } from "redux-persist/integration/react";
import OrderSuccess from "./src/Screens/OrderSuccess/OrderSuccess";
import OrderDetails from "./src/Screens/OrderDetails/OrderDetails";
import CreditCardDetails from "./src/Screens/CreditCard/CreditCardDetails";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                component={Onboarding}
                name="onboarding"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                component={Authentication}
                name="authentication"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                component={ShareLocation}
                name="location"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                component={Home}
                name="home"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                component={Order}
                name="order"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                component={CheckOut}
                name="checkout"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                component={OrderSuccess}
                name="ordersuccess"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                component={OrderDetails}
                name="orderdetails"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                component={CreditCardDetails}
                name="creditcard"
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}
