import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { Appbar } from 'react-native-paper';
import { StatusBar } from "expo-status-bar";
import { ItemBooked } from "../../components/Profile/ItemBooked";

export default function Profile() {
  return (
    <ScrollView>
      <Appbar.Header style={{ backgroundColor: '#1B9C85' }}>
        <Appbar.BackAction color="#fff" onPress={() => { }} />
        <Appbar.Content title="Profile" titleStyle={{ textAlign: 'center', fontSize: 18, color: '#fff' }} />
        <Appbar.Action icon="square" color="#fff" onPress={() => { }} />
      </Appbar.Header>
      <View className="p-5">
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
            <Text className="font-bold" style={{ color: '#1B9C85' }}>27</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text className="font-bold" style={{ fontSize: 16 }}>Reviews</Text>
            <Text className="font-bold" style={{ color: '#1B9C85' }}>10</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text className="font-bold" style={{ fontSize: 16 }}>Favorites</Text>
            <Text className="font-bold" style={{ color: '#1B9C85' }}>115</Text>
          </View>
        </View>
        <View>
          <ItemBooked
            img='https://th.bing.com/th/id/OIP.ZO7MrIVkK21t63Q0K8-obwHaFe?pid=ImgDet&rs=1'
            title='Garden Hotel'
            location='Lake Mary, Florida'
            rate='4.5'
            price='250'
          />
          <ItemBooked
            img='https://th.bing.com/th/id/OIP.ZO7MrIVkK21t63Q0K8-obwHaFe?pid=ImgDet&rs=1'
            title='Garden Hotel'
            location='Lake Mary, Florida'
            rate='4.5'
            price='250'
          />
          <ItemBooked
            img='https://th.bing.com/th/id/OIP.ZO7MrIVkK21t63Q0K8-obwHaFe?pid=ImgDet&rs=1'
            title='Garden Hotel'
            location='Lake Mary, Florida'
            rate='4.5'
            price='250'
          />
          <ItemBooked
            img='https://th.bing.com/th/id/OIP.ZO7MrIVkK21t63Q0K8-obwHaFe?pid=ImgDet&rs=1'
            title='Garden Hotel'
            location='Lake Mary, Florida'
            rate='4.5'
            price='250'
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
