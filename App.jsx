import { SafeAreaView, ScrollView, View } from "react-native";
import Home from "./src/pages/Home";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store/store";
import Navbar from "./src/components/Navbar";

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Navbar />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
