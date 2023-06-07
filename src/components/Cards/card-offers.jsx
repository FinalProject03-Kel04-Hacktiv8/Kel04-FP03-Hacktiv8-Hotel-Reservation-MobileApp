import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Card, Text } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDataLocation,
  updateIdSearch,
} from "../../redux/slices/slice-search";
import searchLocations from "../../utils/API/search/locations";

export default function CardOffers({ img, name }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { data, id } = useSelector((state) => state.search);

  // const delay = (ms) => {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // };

  const handleCategory = async () => {
    if (name != id) {
      // Fetch
      console.log(name);
      console.log("Fetching data...");
      dispatch(fetchDataLocation(searchLocations(name.toLowerCase())));
      console.log("DataSearch fetched!");
      console.log(data);
    }

    navigation.navigate("ListHotels", {
      searchQuery: name,
      id: name.toLowerCase(),
    });
  };

  return (
    <Card className="mx-1" onPress={handleCategory}>
      <Card.Cover
        className="w-40 h-40 relative"
        source={{
          uri: img,
        }}
      />
      <Text className="absolute bottom-3 left-3 text-slate-50 text-base font-bold">
        {name}
      </Text>
    </Card>
  );
}
