import React from "react";
import { ScrollView, View } from "react-native";
import { Appbar, Text } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CardHotels from "../../components/Cards/card-hotels";

export default function Favorites({ navigation, route }) {
  const handleBack = () => {
    navigation.navigate("Home");
  };

  return (
    <View>
      <Appbar.Header>
        <Appbar.Action icon="keyboard-backspace" onPress={handleBack} />
        <Appbar.Content
          title={
            <Text className="text-lg">
              <MaterialCommunityIcons name="cards-outline" size={26} />
              Favo
              <Text className="text-purple-700 font-semibold">rites</Text>{" "}
            </Text>
          }
          mode="center-aligned"
          style={{ alignItems: "center" }}
        />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
      <ScrollView>
        <View className="px-3">
          <CardHotels />
        </View>
      </ScrollView>
    </View>
  );
}
