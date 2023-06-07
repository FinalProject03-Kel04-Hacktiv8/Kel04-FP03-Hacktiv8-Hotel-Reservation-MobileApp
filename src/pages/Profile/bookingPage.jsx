import React, { useEffect, useState } from "react"
import { View, Text, TextInput } from "react-native"
import { AppBarHeader } from "../../components/Profile/AppBarHeader"
import { Button } from "react-native-paper"
import { useDispatch } from "react-redux"
import { onHandleCheckout } from "../../redux/slices/slice-book"
import { useNavigation, useRoute } from "@react-navigation/core"

export const BookingPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [phone, setPhone] = useState('')
  const [checkoutStatus, setCheckoutStatus] = useState(false)
  const navigation = useNavigation()
  const route = useRoute()
  const {
    nameHotel,
    city,
    imgHotel,
    currency,
    price,
    rates,
  } = route.params
  let data = {
    id: +new Date(),
    img: imgHotel,
    title: nameHotel,
    location: city,
    rate: rates,
    currency: currency,
    price: price,
  }
  const dispatch = useDispatch()

  const handleChekout = () => {
    data = {
      name,
      email,
      phone: country + phone,
      data,
    }
    setName('')
    setEmail('')
    setCountry('')
    setPhone('')
    dispatch(onHandleCheckout(data))
    navigation.navigate('Profile')
  }

  useEffect(() => {
    name && email && country && phone
      ? setCheckoutStatus(true)
      : setCheckoutStatus(false)
  }, [name, email, country, phone])

  return (
    <View>
      <AppBarHeader title="Book Now" />
      <View className="p-5 justify-between h-full">
        <View>
          <View>
            <Text className="font-bold mb-5" style={{ fontSize: 16 }}>CONTACT INFORMATIONS</Text>
            <TextInput
              label="Name"
              placeholder="Name"
              value={name}
              onChangeText={text => setName(text)}
              className="bg-white h-10 rounded-md px-3 mb-3.5"
            />
            <TextInput
              label="Email"
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={text => setEmail(text)}
              className="bg-white h-10 rounded-md px-3 mb-3.5"
            />
            <View className="flex-row mb-3.5">
              <TextInput
                label="Country (+62)"
                placeholder="Country (+62)"
                keyboardType="phone-pad"
                value={country}
                onChangeText={text => setCountry(text)}
                className="flex-3 bg-white h-10 rounded-md px-3 mr-3"
              />
              <TextInput
                label="Phone"
                placeholder="Phone"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={text => setPhone(text)}
                className="flex-1 bg-white h-10 rounded-md px-3"
              />
            </View>
          </View>
          <View>
            <Text className="font-bold my-5" style={{ fontSize: 16 }}>PRICE SUMMARY</Text>
            <View className="bg-white p-4 rounded-xl">
              <Text className="font-bold mb-4">3 days, 1 Room, 2 Guest</Text>
              <View className="flex-row items-center justify-between border-b border-gray-200 pb-3 mb-3">
                <Text>Total</Text>
                <Text className="font-bold" style={{ fontSize: 16, color: '#1B9C85' }}>$ 534,67</Text>
              </View>
              <View className="flex-row items-center justify-between">
                <Text>Payable Now</Text>
                <Text className="font-bold" style={{ fontSize: 16, color: '#1B9C85' }}>$ 22,50</Text>
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
  )
}
