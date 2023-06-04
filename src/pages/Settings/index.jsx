import { View, Text, TextInput, TouchableOpacity} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useSelector, useDispatch } from "react-redux";
import { userLogout, profileUpdate } from "../../redux/slices/auth-slice";
import { useNavigation } from '@react-navigation/native';
import { Appbar, Dialog, Portal, List } from "react-native-paper";
import { useState } from "react";

export default function Settings() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);

  const [expanded, setExpanded] = React.useState(true);

  const user = useSelector((state) => state.auth.user);

  const handleInputChange = (text, name) => {
    dispatch(profileUpdate({text, name}));
    setExpanded(false);
  }

  const handlePress = () => setExpanded(!expanded);

  const handleUserLogout = () => {
    dispatch(userLogout());
    navigation.navigate("Home");
    setVisible(false);
  }

  return (
    <View>
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
          <List.Section className="w-full border-b border-slate-200 py-3 flex-row justify-between">
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
          <View 
            className="flex-row items-center justify-between border-b border-slate-200 py-3">
            <Text>Age</Text>
            <TextInput
              defaultValue={user.age}
            />
          </View>
          <StatusBar style="auto" />
        </View>
        <View className="bg-white mt-5 p-5 rounded-lg">
          <Text className="text-lg font-medium">Support</Text>
          <Text className="py-5 border-b border-slate-200">
            Terms of Service
          </Text>
          <TouchableOpacity 
            className="mt-5"
            onPress={() => setVisible(true)}>
            <Text className="text-red-600 font-medium active:text-red-500">
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Portal>
        <Dialog visible={visible}>
          <Dialog.Icon icon="alert" />
          <Dialog.Title className="text-center">
            Are you sure?
          </Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium" className="text-center">
              Do you want to logout
            </Text>
          </Dialog.Content>
          <Dialog.Content className="flex-row justify-center gap-x-10">
            <TouchableOpacity
              className="border-2 border-[#9450e7] px-8 py-1.5 rounded-md"
              onPress={() => setVisible(false)}>
              <Text className="text-[#9450e7] font-medium">No</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-[#9450e7] px-8 py-1.5 rounded-md"
              onPress={handleUserLogout}>
              <Text className="text-white font-medium">Yes</Text>
            </TouchableOpacity>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </View>
  );
}
