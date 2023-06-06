import * as React from "react";
import { SafeAreaView, StyleSheet, ScrollView, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import searchLocations from "../../utils/API/search/locations";
import { checkIn, checkOut } from "../../utils/Date/checkIn-checkOut";
import { useNavigation } from "@react-navigation/core";
import { fetchDataLocation } from "../../redux/slices/slice-search";

export default function CardDestination() {
  const [text, setText] = React.useState("");
  const [value, setValue] = React.useState("");

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const dataSearch = useSelector((state) => state.search.data);

  // Fetch Data
  const handleSearch = () => {
    console.log("idSearch", text.toLowerCase());
    console.log("Fetching data...");
    // Fetch search
    dispatch(fetchDataLocation(searchLocations(text.toLowerCase())));

    console.log("DataSearch fetched!");
    console.log(dataSearch);

    navigation.navigate("SearchDest", {
      searchQuery: text,
      id: text.toLowerCase(),
      Guest: value,
    });
  };

  return (
    <View
      className="relative h-72 rounded-lg p-3 bg-slate-50 mt-3"
      style={{ elevation: 12 }}
    >
      <ScrollView>
        <TextInput
          label="Where do you want to go?"
          value={text}
          onChangeText={(text) => setText(text)}
          mode="outlined"
          left={<TextInput.Icon icon="map-search-outline" />}
        />
        <View className="flex flex-row my-3 justify-between">
          <TextInput
            style={{ minWidth: 155 }}
            label="Check-in date"
            value={checkIn}
            // onChangeText={(text) => setText(text)}
            mode="outlined"
            left={<TextInput.Icon icon="calendar" />}
          />
          <TextInput
            style={{ minWidth: 155 }}
            label="Check-out date"
            value={checkOut}
            // onChangeText={(text) => setText(text)}
            mode="outlined"
            left={<TextInput.Icon icon="calendar" />}
          />
        </View>

        {/* Guest */}
        <SafeAreaView style={styles.container}>
          <TextInput
            keyboardType="numeric"
            label="Guest Amount"
            value={value}
            onChangeText={(value) => setValue(value)}
            mode="outlined"
            left={<TextInput.Icon icon="account-multiple-outline" />}
            style={styles.inputText}
          />
        </SafeAreaView>

        {/* Button Search */}
        <Button
          onPress={handleSearch}
          icon={() => {
            return <AntDesign name="search1" size={18} color={"#27374D"} />;
          }}
          textColor="#27374D"
          className="rounded-full bg-[#CAF7E3] mt-3 py-1"
          style={{ height: 50 }}
        >
          Search
        </Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  inputText: {
    borderRadius: 10,
  },
});
