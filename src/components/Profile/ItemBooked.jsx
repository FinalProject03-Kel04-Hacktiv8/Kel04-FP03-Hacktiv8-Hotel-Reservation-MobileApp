import React from 'react'
import { View, Text, Image } from "react-native"
import FontAwesome from "react-native-vector-icons/FontAwesome"

export const ItemBooked = ({
  img,
  title,
  location,
  rate,
  currency,
  price
}) => {
  const createStar = (num, numFloat) => Number(rate) < num ? Number(rate) < numFloat ? "star-o" : "star-half-o" : "star"

  return (
    <View className="flex-1 p-3 mb-3 flex-row items-center bg-white shadow rounded-md">
      <Image source={{
        uri: img,
        width: 100,
        height: 100,
      }} className="rounded-xl" />
      <View className="flex-1 justify-between pl-3">
        <Text numberOfLines={1} className="font-bold text-lg">{title}</Text>
        <Text numberOfLines={1} className="text-base mb-1">{location}</Text>
        <View className="flex-row items-center">
          <FontAwesome name={createStar(2, 1)} color='orange' size={16} style={{ marginRight: 5 }} />
          <FontAwesome name={createStar(4, 3)} color='orange' size={16} style={{ marginRight: 5 }} />
          <FontAwesome name={createStar(6, 5)} color='orange' size={16} style={{ marginRight: 5 }} />
          <FontAwesome name={createStar(8, 7)} color='orange' size={16} style={{ marginRight: 5 }} />
          <FontAwesome name={createStar(10, 9)} color='orange' size={16} style={{ marginRight: 5 }} />
          <Text className="ml-2">{rate}</Text>
        </View>
        <View className="mt-1">
          <Text className="font-bold text-xl" style={{ color: '#1B9C85' }}>
            {currency} {Number(price).toLocaleString()}
            <Text className="text-xs text-black leading-7"> /per night</Text>
          </Text>
        </View>
      </View>
    </View>
  )
}
