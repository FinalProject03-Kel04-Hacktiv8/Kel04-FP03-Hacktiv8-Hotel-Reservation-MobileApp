import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useSelector, useDispatch } from "react-redux";
import { userLogout, profileUpdate } from "../../redux/slices/auth-slice";
import { useNavigation } from '@react-navigation/native';


export default function Settings() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const user = useSelector((state) => state.auth.user);

  const handleInputChange = (text, name) => {
    dispatch(profileUpdate({text, name}));
  }

  const handleUserLogout = () => {
    dispatch(userLogout());
    return navigation.navigate("Home");
  }

  return (
    <SafeAreaView className="p-5 bg-slate-100 flex-1">
      <View className="bg-white p-5 rounded-lg">
          <Text 
            className="text-lg font-medium">
              My Account
          </Text>
          <View 
            className="flex-row items-center justify-between border-b border-slate-200 py-3">
            <Text>First Name</Text>
            <TextInput
              defaultValue={user.firstName}
              onChangeText={(text) => handleInputChange(text, "firstName")}
            />
          </View>
          <View 
            className="flex-row items-center justify-between border-b border-slate-200 py-3">
            <Text>Last Name</Text>
            <TextInput
              defaultValue={user.lastName}
              onChangeText={(text) => handleInputChange(text, "lastName")}
            />
          </View>
          <View 
            className="flex-row items-center justify-between border-b border-slate-200 py-3">
            <Text>Email</Text>
            <TextInput
              defaultValue={user.email}
              onChangeText={(text) => handleInputChange(text, "email")}
            />
          </View>
          <View 
            className="flex-row items-center justify-between border-b border-slate-200 py-3">
            <Text>Gender</Text>
            <TextInput
              defaultValue={user.gender}
            />
          </View>
          <View 
            className="flex-row items-center justify-between border-b border-slate-200 py-3">
            <Text>Age</Text>
            <TextInput
              defaultValue={user.age}
            />
          </View>
          <TouchableOpacity 
            className="mt-5"
            onPress={handleUserLogout}>
            <Text className="text-red-600 font-medium active:text-red-500">
              Logout
            </Text>
          </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
