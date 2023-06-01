import { StatusBar } from "expo-status-bar";
import { Text, TextInput, View, SafeAreaView, Button } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataList } from "../../redux/slices/slice-list";
import List from "../../utils/API/properties/list";

export default function Home() {
  const dispatch = useDispatch();
  const listState = useSelector((state) => state.list.data);

  let checkIn = "2023-06-01";
  let checkOut = "2023-06-02";

  const handleGetData = () => {
    dispatch(fetchDataList(List(checkIn, checkOut)));
    console.log(listState);
  };

  return (
    <SafeAreaView className="flex-1 justify-center px-2">
      <View className="relative border-2 h-80">
        <Text className="font-bold absolute bottom-0">Yeay, Udah bisa!</Text>
        <TextInput />
        <Button
          onPress={handleGetData}
          title="GetData"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
