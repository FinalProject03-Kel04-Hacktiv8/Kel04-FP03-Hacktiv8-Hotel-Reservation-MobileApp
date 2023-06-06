import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Favorites from "../../pages/Favorites";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import Settings from "../../pages/Settings";

const Tab = createMaterialBottomTabNavigator();

export default function Navbar() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <AntDesign name="home" size={26} />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "Favorite",
          tabBarIcon: () => <MaterialIcons name="favorite-border" size={26} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => <AntDesign name="profile" size={26} />,
        }}
      />

      {/* this just a moment, delete after. Preview purpose only */}
      {/* <Tab.Screen
        name="BookingPage"
        component={BookingPage}
        options={{
          tabBarLabel: "Book",
          tabBarIcon: () => <AntDesign name="shoppingcart" size={26} />,
        }}
      /> */}
      {/*  */}

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: () => <AntDesign name="setting" size={26} />,
        }}
      />
    </Tab.Navigator>
  );
}
