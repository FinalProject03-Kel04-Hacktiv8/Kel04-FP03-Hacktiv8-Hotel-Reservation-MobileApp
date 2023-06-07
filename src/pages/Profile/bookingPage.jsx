import React, { useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Appbar, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { onHandleCheckout } from "../../redux/slices/slice-book";
import { useNavigation, useRoute } from "@react-navigation/core";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const BookingPage = () => {
  const user = useSelector((state) => state.user);
  const [name, setName] = useState(`${user.firstName} ${user.lastName}`);
  const [email, setEmail] = useState(user.email);
  const [country, setCountry] = useState(user.phone.slice(0, 3));
  const [phone, setPhone] = useState(user.phone.split("+62").join(""));
  const [checkoutStatus, setCheckoutStatus] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const { nameHotel, city, imgHotel, currency, price, rates, Guest } =
    route.params;

  const total = Number(price) * Guest;
  const payable = (Number(total) * (5 / 100)).toLocaleString();
  let data = {
    id: +new Date(),
    img: imgHotel,
    title: nameHotel,
    location: city,
    rate: rates,
    currency: currency,
    price: total,
    guest: Guest,
  };
  const dispatch = useDispatch();

  const handleChekout = () => {
    data = {
      name,
      email,
      phone: country + phone,
      data,
    };
    setName("");
    setEmail("");
    setCountry("");
    setPhone("");
    dispatch(onHandleCheckout(data));
    navigation.navigate("Profile");
  };

  useEffect(() => {
    name && email && country && phone
      ? setCheckoutStatus(true)
      : setCheckoutStatus(false);
  }, [name, email, country, phone]);

  return (
    <View>
      <Appbar.Header>
        <Appbar.Action
          icon="keyboard-backspace"
          onPress={() => navigation.navigate("Home")}
        />
        <Appbar.Content
          title={
            <Text className="text-lg">
              <MaterialCommunityIcons name="cards-outline" size={26} />
              Book <Text className="text-purple-700 font-semibold">
                Now
              </Text>{" "}
            </Text>
          }
          mode="center-aligned"
          style={{ alignItems: "center" }}
        />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
      <View className="p-5 justify-between h-full">
        <View>
          <View>
            <Text className="font-bold mb-5" style={{ fontSize: 16 }}>
              CONTACT INFORMATIONS
            </Text>
            <TextInput
              label="Name"
              placeholder="Name"
              value={name}
              onChangeText={(text) => setName(text)}
              className="bg-white h-10 rounded-md px-3 mb-3.5"
            />
            <TextInput
              label="Email"
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={(text) => setEmail(text)}
              className="bg-white h-10 rounded-md px-3 mb-3.5"
            />
            <View className="flex-row mb-3.5">
              <TextInput
                label="Country (+62)"
                placeholder="Country (+62)"
                keyboardType="phone-pad"
                value={country}
                onChangeText={(text) => setCountry(text)}
                className="flex-3 bg-white h-10 rounded-md px-3 mr-3"
              />
              <TextInput
                label="Phone"
                placeholder="Phone"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={(text) => setPhone(text)}
                className="flex-1 bg-white h-10 rounded-md px-3"
              />
            </View>
          </View>
          <View>
            <Text className="font-bold my-5 text-base">PRICE SUMMARY</Text>
            <View className="bg-white p-4 rounded-xl">
              <Text className="font-bold mb-4">
                1 days, 1 Room, {Guest} Guest
              </Text>
              <View className="flex-row items-center justify-between border-b border-gray-200 pb-3 mb-3">
                <Text>Total</Text>
                <Text
                  className="font-bold text-base"
                  style={{ color: "#1B9C85" }}
                >
                  {currency} {total.toLocaleString()}
                </Text>
              </View>
              <View className="flex-row items-center justify-between">
                <Text>Payable Now</Text>
                <Text
                  className="font-bold text-base"
                  style={{ color: "#1B9C85" }}
                >
                  {currency} {payable}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Button
          className="mb-52 mt-10"
          id="btncheckout"
          buttonColor={checkoutStatus ? "#1B9C85" : "#ddd"}
          textColor={checkoutStatus ? "#fff" : "#888"}
          mode="contained"
          onPress={checkoutStatus ? handleChekout : null}
        >
          Continue
        </Button>
      </View>
    </View>
  );
};
