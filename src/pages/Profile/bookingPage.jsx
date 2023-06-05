import React, { useEffect, useState } from "react"
import { View, Text, TextInput } from "react-native"
import { AppBarHeader } from "../../components/Profile/AppBarHeader"
import { Button } from "react-native-paper"
import { useDispatch } from "react-redux"
import { onHandleCheckout } from "../../redux/slices/slice-book"

export const BookingPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [phone, setPhone] = useState('')
  const [checkoutStatus, setCheckoutStatus] = useState(false)
  let data = {
    id: 0,
    img: 'data:image/jpeg;base64,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',
    title: 'Hilton Hotel',
    location: 'Medan City, Sumut',
    rate: '4.5',
    price: '320',
  }  //-> this data is detail of item
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
