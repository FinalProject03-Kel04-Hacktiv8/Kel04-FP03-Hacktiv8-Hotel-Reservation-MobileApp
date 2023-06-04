import { SafeAreaView, ScrollView, View } from "react-native";
import Home from "./src/pages/Home";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux/store/store";
import Navbar from "./src/components/Navbar";
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <NavigationContainer>
            <Navbar />
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
