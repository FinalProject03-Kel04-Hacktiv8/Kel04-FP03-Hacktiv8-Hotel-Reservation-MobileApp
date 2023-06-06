import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function Settings() {
  return (
    <SafeAreaView className="flex-1 justify-center px-2">
      <View className="relative border-2 items-center h-80">
        <Text className="font-bold absolute bottom-0">Setting</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
