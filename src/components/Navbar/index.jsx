import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Home from "../../pages/Home";
import Settings from "../../pages/Settings";
import Favorites from "../../pages/Favorites";
import Profile from "../../pages/Profile";
import ProtectedRoute from "../ProtectedRoute";
import { useSelector } from "react-redux";

const Tab = createMaterialBottomTabNavigator();

export default function Navbar() {
  const auth = useSelector((state) => state.auth);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <MaterialCommunityIcons name="home" size={26} />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "Favorite",
          tabBarIcon: () => <MaterialIcons name="favorite" size={26} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => <AntDesign name="profile" size={26} />,
        }}
      >
        {() => (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        )}
      </Tab.Screen>
      {auth?.token &&
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: () => <AntDesign name="setting" size={26} />,
          }}
        />
      }
    </Tab.Navigator>
  );
}
