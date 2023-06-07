import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import Navbar from "./src/components/Navbar";
import SearchDest from "./src/pages/Home/Search/SearchDest";
import ListHotels from "./src/pages/Home/listHotels";
import { store } from "./src/redux/store/store";
import Detail from "./src/pages/Details/detail";
import { BookingPage } from "./src/pages/Profile/bookingPage";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Group>
              <Stack.Screen
                name="Navbar"
                component={Navbar}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ListHotels"
                component={ListHotels}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SearchDest"
                component={SearchDest}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Detail"
                component={Detail}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Booking"
                component={BookingPage}
                options={{ headerShown: false }}
              />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
