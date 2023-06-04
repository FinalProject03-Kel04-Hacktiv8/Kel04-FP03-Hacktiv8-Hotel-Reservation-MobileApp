import React from 'react'
import { View, Text, Image } from "react-native"
import FontAwesome from "react-native-vector-icons/FontAwesome"

export const ItemBooked = ({
  img,
  title,
  location,
  rate,
  price
}) => {
  return (
    <View className="h-32 flex-1 p-3 mb-3 flex-row justify-between items-center bg-white shadow rounded-md">
      <Image source={{
        uri: img,
        width: 100,
        height: 100,
      }} style={{ borderRadius: 12 }} />
      <View className="justify-between h-20 pr-3">
        <Text className="font-bold" style={{ fontSize: 18 }}>{title}</Text>
        <Text style={{ fontSize: 16 }}>{location}</Text>
        <View className="flex-row items-center">
          <FontAwesome name="star" color='orange' size={16} style={{ marginRight: 5 }} />
          <FontAwesome name="star" color='orange' size={16} style={{ marginRight: 5 }} />
          <FontAwesome name="star" color='orange' size={16} style={{ marginRight: 5 }} />
          <FontAwesome name="star" color='orange' size={16} style={{ marginRight: 5 }} />
          <FontAwesome name="star-half-o" color='orange' size={16} style={{ marginRight: 5 }} />
          <Text className="ml-2">{rate}</Text>
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text className="font-bold" style={{ fontSize: 20, color: '#1B9C85' }}>$ {price}</Text>
        <Text style={{ fontSize: 12 }}>/per night</Text>
      </View>
    </View>
  )
}
