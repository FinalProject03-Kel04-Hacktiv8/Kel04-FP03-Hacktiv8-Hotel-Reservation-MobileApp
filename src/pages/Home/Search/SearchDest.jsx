import { useNavigation, useRoute } from "@react-navigation/core";
import * as React from "react";
import { SafeAreaView, ScrollView, Text, View, Image } from "react-native";
import {
  Appbar,
  TextInput,
  ActivityIndicator,
  MD2Colors,
} from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { GuestAmount } from "../../../components/Inputs/guestAmount";
import { checkIn, checkOut } from "../../../utils/Date/checkIn-checkOut";
import CardHotels from "../../../components/Cards/card-hotels";
import { fetchDataList } from "../../../redux/slices/slice-list";
import {
  fetchDataLocation,
  updateIdSearch,
} from "../../../redux/slices/slice-search";
import List from "../../../utils/API/properties/list";
import searchLocations from "../../../utils/API/search/locations";

export default function SearchDest() {
  const route = useRoute();
  const { searchQuery, id, Guest } = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const dataSearch = useSelector((state) => state.search);
  const { data, loading } = useSelector((state) => state.list);

  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const existDataFetch = data?.result?.filter((hotel) => {
    if (
      dataSearch.data[0]?.country === hotel?.country_trans &&
      typeof searchQuery === "string"
    ) {
      return data.result;
    }
  });

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        if (dataSearch.data.length != 0 || data.length == 0) {
          await delay(1000);
          dispatch(
            fetchDataList(
              List(
                checkIn,
                checkOut,
                (dest_ids = dataSearch.data[0]?.dest_id),
                (dest_type = dataSearch.data[0]?.dest_type),
                (guest_qty = Number(Guest))
              )
            )
          );
          // console.log("DataList fetched!");
          // console.log(data);
        } else if (dataSearch.data.length == 0) {
          dispatch(fetchDataLocation(searchLocations(id)));
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    if (
      searchQuery !== dataSearch.id ||
      dataSearch.id === "" ||
      existDataFetch === undefined ||
      existDataFetch.length == 0
    ) {
      fetchData();
      dispatch(updateIdSearch(searchQuery));
    }
  }, [dataSearch, id]);

  console.log(existDataFetch);
  console.log("id", dataSearch.id);

  // Acation Back
  const handleBack = () => {
    navigation.navigate("Home");
  };

  return (
    <View>
      <Appbar.Header>
        <Appbar.Action icon="keyboard-backspace" onPress={handleBack} />
        <Appbar.Content
          title={
            <Text className="text-lg">
              <MaterialCommunityIcons name="cards-outline" size={26} />
              Stay
              <Text className="text-purple-700 font-semibold">Doors</Text>{" "}
            </Text>
          }
          mode="center-aligned"
          style={{ alignItems: "center" }}
        />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
      <ScrollView>
        <SafeAreaView className="px-2">
          {/* Card Destination */}
          <View
            className="relative h-56 rounded-lg p-3 bg-slate-50 mt-3"
            style={{ elevation: 12 }}
          >
            <ScrollView>
              <TextInput
                label="Where do you want to go?"
                value={searchQuery}
                //   onChangeText={(text) => setText(text)}
                mode="outlined"
                editable={false}
                left={<TextInput.Icon icon="map-search-outline" />}
              />
              <View className="flex flex-row my-3 justify-between">
                <TextInput
                  style={{ minWidth: 155 }}
                  label="Check-in date"
                  value={checkIn}
                  // onChangeText={(text) => setText(text)}
                  mode="outlined"
                  editable={false}
                  left={<TextInput.Icon icon="calendar" />}
                />
                <TextInput
                  style={{ minWidth: 155 }}
                  label="Check-out date"
                  value={checkOut}
                  // onChangeText={(text) => setText(text)}
                  mode="outlined"
                  editable={false}
                  left={<TextInput.Icon icon="calendar" />}
                />
              </View>
              <GuestAmount value={Guest} editable={false} />
            </ScrollView>
          </View>
          {/* Card Destination End */}
          <View className="px-2">
            {existDataFetch == undefined ||
            existDataFetch.length == 0 ||
            loading ? (
              <View className="mt-36">
                <ActivityIndicator
                  animating={true}
                  size={"large"}
                  color={MD2Colors.purple500}
                />
                <Text className="text-[20px] mt-2 text-slate-500 text-center font-bold">
                  Loading!
                </Text>
              </View>
            ) : existDataFetch.length == 0 ? (
              <View className="mt-36">
                <Image
                  source={require("../../../../assets/not-found.png")}
                  style={{ width: 200, height: 200 }}
                  resizeMode="contain"
                />
                <Text className="text-[20px] mt-2 text-slate-500 text-center font-bold">
                  I'm sorry your destination is not Found!
                </Text>
              </View>
            ) : (
              existDataFetch?.map((hotel, index) => (
                <CardHotels
                  key={index}
                  name={hotel?.hotel_name}
                  city={hotel?.city}
                  imgHotel={hotel?.main_photo_url}
                  price={hotel?.price_breakdown?.gross_price}
                  currency={hotel?.price_breakdown?.currency}
                  reviews={hotel?.review_score_word}
                  rates={hotel?.review_score}
                  Guest={Number(Guest)}
                />
              ))
            )}
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}
