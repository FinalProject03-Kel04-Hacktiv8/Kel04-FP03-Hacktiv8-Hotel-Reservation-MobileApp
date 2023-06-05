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
          }} style={{ borderRadius: 12 }} />
          <View className="justify-center" style={{ alignItems: 'center', flexGrow: 1 }}>
            <Text className="font-bold" style={{ fontSize: 22 }}>Gordon Norman</Text>
            <Text style={{ fontSize: 16 }}>@gordonnorman</Text>
          </View>
        </View>
        <View className="my-8 p-5 flex-row justify-between border-t-2 border-b-2 border-gray-300">
          <View style={{ alignItems: 'center' }}>
            <Text className="font-bold" style={{ fontSize: 16 }}>Bookings</Text>
            <Text className="font-bold" style={{ color: '#1B9C85' }}>{booked.length}</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text className="font-bold" style={{ fontSize: 16 }}>Reviews</Text>
            <Text className="font-bold" style={{ color: '#1B9C85' }}>0</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text className="font-bold" style={{ fontSize: 16 }}>Favorites</Text>
            <Text className="font-bold" style={{ color: '#1B9C85' }}>0</Text>
          </View>
        </View>
        <View>
          {
            booked.map(item => (
              <ItemBooked
                key={item.data.id}
                img={item.data.img}
                title={item.data.title}
                location={item.data.location}
                rate={item.data.rate}
                price={item.data.price}
              />
            ))
          }
        </View>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
