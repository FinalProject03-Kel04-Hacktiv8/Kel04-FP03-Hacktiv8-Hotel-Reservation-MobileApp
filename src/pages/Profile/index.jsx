import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Card from "../../components/Card";
import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector((state) => state.auth.user);

  return (
    <SafeAreaView>
      <View className="p-5">
        <View className="bg-white p-3 flex-row w-full rounded-lg">
          <View className="w-16 h-16 border-2 border-slate-600 mr-5">
            <Image
              className="w-full h-full"
              source={{
                uri: "https://media.istockphoto.com/id/1225790722/vector/user-profile-icon-vector-avatar-portrait-symbol-flat-shape-person-logo-web-and-mobile.jpg?s=170667a&w=0&k=20&c=31-8Hn2HeXSkhq050QQ1LKs7BclsmupgwM50Gt3WEMU="
              }}
            />
          </View>
          <View>
            <Text className="font-semibold text-lg">
              {`${user?.firstName} ${user?.lastName}`}
            </Text>
            <Text className="text-slate-500">
              {user?.email}
            </Text>
          </View>
        </View>

        <Text 
          className="mb-3 mt-10 text-lg font-medium">
          Boking History
        </Text>

        <FlatList
          data={[
            {title: "garden Hotel"}, 
            {title: "Mawar Hotel"}, 
            {title: "Hora Umum Hotel"}
          ]}
          renderItem={({ item }) => <Card item={item} />}
          keyExtractor={item => item.title}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
