import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { popularPhotos } from "../../assetsStayDoors/popular-destPhotos";
import { topPhotos } from "../../assetsStayDoors/top-destPhotos";
import CardDestination from "../../components/Cards/card-destination";
import CardOffers from "../../components/Cards/card-offers";
import HeaderHome from "../../components/Header/header-home";

export default function Home() {
  const { data } = useSelector((state) => state.search);
  const dataList = useSelector((state) => state.list.data);

  console.log("data search Home", data);
  console.log("data list Home", dataList);

  return (
    <View>
      <HeaderHome />

      <ScrollView>
        <SafeAreaView className="px-2">
          <CardDestination />
          <Text className="text-[16px] font-bold mt-8">TOP DESTINATIONS</Text>
          <ScrollView horizontal={true}>
            <View className="flex-1 flex-row my-3">
              {topPhotos.map((destination, index) => (
                <CardOffers
                  img={destination.img}
                  id={destination.id}
                  name={destination.name}
                  key={index}
                />
              ))}
            </View>
          </ScrollView>
          <Text className="text-[16px] font-bold mt-5">
            POPULAR DESTINATIONS
          </Text>
          <ScrollView horizontal={true}>
            <View className="flex-1 flex-row my-3">
              {popularPhotos.map((destination, index) => (
                <CardOffers
                  img={destination.img}
                  name={destination.name}
                  key={index}
                />
              ))}
            </View>
          </ScrollView>
          <Text className="text-[16px] font-bold mt-5 mb-2 h-40">HOTELS</Text>
        </SafeAreaView>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}
