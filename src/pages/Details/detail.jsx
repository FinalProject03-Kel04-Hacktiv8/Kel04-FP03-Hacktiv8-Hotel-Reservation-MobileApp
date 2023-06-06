import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { ActivityIndicator, Appbar, MD2Colors } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import CardHotels from "../../components/Cards/card-hotels";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import { fetchDataList } from "../../redux/slices/slice-list";
import List from "../../utils/API/properties/list";
import { fetchDataLocation } from "../../redux/slices/slice-search";
import searchLocations from "../../utils/API/search/locations";
import { checkIn, checkOut } from "../../utils/Date/checkIn-checkOut";

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();
  const { nameHotel, city, imgHotel, price, currency, rates, reviews } =
    route.params;

  // Change This tobe your actions
  const handleBack = () => {
    navigation.navigate("Home");
  };

  const handleBooking = () => {
    navigation.navigate("Booking", {
      nameHotel,
      city,
      imgHotel,
      price,
      currency,
      rates,
      reviews,
    });
  };

  return (
    <View>
      <Appbar.Header>
        <Appbar.Action icon="keyboard-backspace" onPress={handleBack} />
        <Appbar.Content
          title={
            <Text className="text-lg">
              <MaterialCommunityIcons name="cards-outline" size={26} />
              Hotel{" "}
              <Text className="text-purple-700 font-semibold">Detail</Text>{" "}
            </Text>
          }
          mode="center-aligned"
          style={{ alignItems: "center" }}
        />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
      <View className="relative">
        <Image
          source={{
            uri: imgHotel,
          }}
          style={{
            height: 200,
          }}
        />
        <Text className="font-bold ml-3 text-slate-50 text-lg max-w-[200px] leading-6 absolute bottom-16">
          {nameHotel}
        </Text>
        <View className="flex-row items-center ml-3 absolute bottom-8">
          <Ionicons name="md-location-outline" color="#F7F7F7" size={20} />
          <Text className="font-light ml-1 text-slate-50 text-base max-w-[200px] ">
            {city}
          </Text>
        </View>
        <View className="flex-row ml-3 absolute bottom-2 ">
          <AntDesign name="star" color="#FAC213" size={20} />
          <Text className="ml-1 text-slate-50">
            {rates} | {reviews ?? "Haven't Review Yet"}
          </Text>
        </View>
        <View className="absolute bottom-2 right-0 bg-purple-600 opacity-70 rounded-l-full px-2 pb-1">
          <Text className="font-bold text-lg text-white pl-1">
            {currency} {Number(price).toLocaleString()}
          </Text>
          <Text className="text-right text-white">/per Night</Text>
        </View>
      </View>
    </View>
  );
}
