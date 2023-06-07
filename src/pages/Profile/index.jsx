import React, { useEffect } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ItemBooked } from "../../components/Profile/ItemBooked";
import { AppBarHeader } from "../../components/Profile/AppBarHeader";
import { useSelector } from "react-redux";

export default function Profile() {
  const booked = useSelector(state => state.booked.booked)

  useEffect(() => { }, [booked])

  return (
    <ScrollView>
      <AppBarHeader title="Profile" />
      <View className="py-5 px-3">
        <View className="h-25 flex-row justify-between">
          <Image source={{
            uri: 'https://th.bing.com/th/id/OIP.QjynegEfQVPq5kIEuX9fWQHaFj?pid=ImgDet&rs=1',
            width: 100,
            height: 100,
          }} className="rounded-xl" />
          <View className="justify-center items-center grow">
            <Text className="font-bold text-2xl">Gordon Norman</Text>
            <Text className="text-base">@gordonnorman</Text>
          </View>
        </View>
        <View className="my-8 p-5 flex-row justify-between border-t-2 border-b-2 border-gray-300">
          <View className="items-center">
            <Text className="font-bold text-base">Bookings</Text>
            <Text className="font-bold" style={{ color: '#1B9C85' }}>{booked.length}</Text>
          </View>
          <View className="items-center">
            <Text className="font-bold text-base">Reviews</Text>
            <Text className="font-bold" style={{ color: '#1B9C85' }}>0</Text>
          </View>
          <View className="items-center">
            <Text className="font-bold text-base">Favorites</Text>
            <Text className="font-bold" style={{ color: '#1B9C85' }}>0</Text>
          </View>
        </View>
        <View>
          {
            booked.length > 0
              ? booked.map(item => (
                <ItemBooked
                  key={item.data.id}
                  img={item.data.img}
                  title={item.data.title}
                  location={item.data.location}
                  rate={item.data.rate}
                  currency={item.data.currency}
                  price={item.data.price}
                />
              ))
              : <Text className="text-base text-center mt-5">Your booking appear here.</Text>
          }
        </View>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
