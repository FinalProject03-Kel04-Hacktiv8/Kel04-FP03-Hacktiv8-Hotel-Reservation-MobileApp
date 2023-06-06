import { View, Text, TextInput, TouchableOpacity, ScrollView} from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../../redux/slices/auth-slice";
import { useNavigation } from '@react-navigation/native';
import { Appbar, List, Portal } from "react-native-paper";
import { useState } from "react";
import LogoutPopup from "../../components/LogoutPopup";
import { profileUpdate } from "../../redux/slices/user-slice";

export default function Settings() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const user = useSelector((state) => state.user);

  const handleInputChange = (text, name) => {
    dispatch(profileUpdate({text, name}));
    console.log(text, name);
    setExpanded(false);
  }

  const handlePress = () => setExpanded(!expanded);

  const handleShowPopupConfirmation = (state) => {
    setVisible(state);
  }

  const handleUserLogout = () => {
    dispatch(userLogout());
    navigation.navigate("Home");
    setVisible(false);
  }

  return (
    <ScrollView>
      <Appbar.Header style={{backgroundColor: '#9450e7'}}>
        <Appbar.BackAction onPress={() => navigation.goBack()} color="#fff" />
        <Appbar.Content title="Settings" color="#fff" />
      </Appbar.Header>
      <View className="p-5">
        <View className="bg-white p-5 rounded-lg">
          <Text 
            className="text-lg font-medium">
              My Account
          </Text>
          <View 
            className="flex-row items-center justify-between border-b border-slate-200 py-3">
            <Text>First Name</Text>
            <TextInput
              className="w-1/2 text-right focus:border-2 focus:border-[#9450e7] py-1 rounded-md focus:pr-3"
              defaultValue={user.firstName}
              onChangeText={(text) => handleInputChange(text, "firstName")}
            />
          </View>
          <View 
            className="flex-row items-center justify-between border-b border-slate-200 py-3">
            <Text>Last Name</Text>
            <TextInput
              className="w-1/2 text-right focus:border-2 focus:border-[#9450e7] py-1 rounded-md focus:pr-3"
              defaultValue={user.lastName}
              onChangeText={(text) => handleInputChange(text, "lastName")}
            />
          </View>
          <View 
            className="flex-row items-center justify-between border-b border-slate-200 py-3">
            <Text>Email</Text>
            <TextInput
              className="w-1/2 text-right focus:border-2 focus:border-[#9450e7] py-1 rounded-md focus:pr-3"
              defaultValue={user.email}
              onChangeText={(text) => handleInputChange(text, "email")}
            />
          </View>
          <View 
            className="flex-row items-center justify-between border-b border-slate-200 py-2">
            <Text>Age</Text>
            <TextInput
              className="w-1/2 text-right focus:border-2 focus:border-[#9450e7] py-1 rounded-md focus:pr-3"
              defaultValue={user.age}
              onChangeText={(text) => handleInputChange(text, "age")}
            />
          </View>
          <List.Section className="w-full border-b border-slate-200 flex-row justify-between items-start">
            <List.Subheader className="px-0 text-black">Gender</List.Subheader>
            <List.Accordion
              className="p-0 w-[100px]"
              titleStyle={{fontSize: 15}}
              title={user.gender}
              expanded={expanded}
              onPress={handlePress}>
              <List.Item
              titleStyle={{fontSize: 15}} 
                title="Male" 
                onPress={() => handleInputChange("Male", "gender")} />
              <List.Item
                titleStyle={{fontSize: 15}}
                title="Female" 
                onPress={() => handleInputChange("Female", "gender")} />
            </List.Accordion>
          </List.Section>
        </View>
        <View className="bg-white mt-5 p-5 rounded-lg">
          <Text className="text-lg font-medium">Support</Text>
          <Text className="py-5 border-b border-slate-200">
            Terms of Service
          </Text>
          <TouchableOpacity 
            className="mt-5"
            onPress={() => handleShowPopupConfirmation(true)}>
            <Text className="text-red-600 font-medium active:text-red-500">
              Logout
            </Text>
          </TouchableOpacity>
        </View>
        <Portal>
          <LogoutPopup 
            visible={visible}
            showPopup={handleShowPopupConfirmation}
            handleUserLogout={handleUserLogout} />
        </Portal>
      </View>
    </ScrollView>
  );
}
