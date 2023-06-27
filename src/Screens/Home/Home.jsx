import {TouchableOpacity } from "react-native";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "react-native-heroicons/outline";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeBody from "./HomeBody/HomeBody";
import Cart from "./Cart/Cart";
import Profile from "./Profile/Profile";
import Search from "./Search/Search";

const Home = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: "#0BCE83",
        tabBarInactiveTintColor: "black",
        tabBarButton: (props) => (
          <TouchableOpacity
            {...props}
            className={`mx-4 ${
              props.accessibilityState.selected
                ? `border-t-4 border-primaryColor`
                : ``
            }`}
          />
        ),
      }}
    >
      <Tab.Screen
        name="HomeBody"
        component={HomeBody}
        options={{
          tabBarIcon: ({ color }) => <HomeIcon size={28} color={color} />,
        }}
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={{
          tabBarIcon: ({ color }) => (
            <MagnifyingGlassIcon size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color }) => (
            <ShoppingBagIcon size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <UserCircleIcon size={30} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
