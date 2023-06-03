import { View, Text, Image, FlatList, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Card from "../../components/Card";
import { useSelector } from "react-redux";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const navigation = useNavigation();

  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Profile" />
      </Appbar.Header>
      <View>
        <View className="bg-white p-3 rounded-lg items-center">
          <View className="w-20 h-20 rounded-full overflow-hidden border-2 border-slate-300">
            <Image
              className="w-full h-full"
              source={{
                uri: "https://yt3.googleusercontent.com/eLCADxKBRj3JGsifnxitZwfsbeV3DDlS3r8SzN5QPT2juw0fTV34T09vIZWfEF3D4JmV2z6hZA=s900-c-k-c0x00ffffff-no-rj"
              }}
            />
          </View>
            <Text className="font-semibold text-lg mt-2">
              {`${user?.firstName} ${user?.lastName}`}
            </Text>
            <Text className="text-slate-500">
              {user?.email}
            </Text>
          <View className="w-full flex-row justify-around mt-5 pt-3 border-t border-slate-200">
            <View>
              <Text 
                className="text-center">
                Bokings
              </Text>
              <Text 
                className="text-center font-semibold">
                27
              </Text>
            </View>
            <View>
              <Text 
                className="text-center">
                Reviews
              </Text>
              <Text 
                className="text-center font-semibold">
                  12
              </Text>
            </View>
            <View>
              <Text 
                className="text-center">
                Favorites
                </Text>
              <Text 
                className="text-center font-semibold">
                50
              </Text>
            </View>
          </View>
        </View>
        
        <View className="mt-10 px-5">
          <Text 
            className="mb-3 text-lg font-medium">
            Boking History
          </Text>

          <FlatList
            data={[
              {title: "garden Hotel"}, 
              {title: "Hora Umum Hotel"}
            ]}
            renderItem={({ item }) => <Card item={item} />}
            keyExtractor={item => item.title}
          />
        </View>
        <StatusBar style="auto" />
      </View>
    </>
  );
}
