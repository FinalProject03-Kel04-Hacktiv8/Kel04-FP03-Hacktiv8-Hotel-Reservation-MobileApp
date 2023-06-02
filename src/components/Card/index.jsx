import AntDesign from "react-native-vector-icons/AntDesign";
import { Text, View, Image } from "react-native";

export default function Card({ item }) {
  return (
    <View className="bg-white p-3 rounded-lg flex-row mb-5">
      <Image
        className="w-20 h-20 rounded-lg"
        source={{
          uri: "https://cf.bstatic.com/xdata/images/hotel/square200/322901522.webp?k=79663787cfd6f59d6d06f40dfb0f91bd931feb7109b25881f57cb1fe112829ab&o="
        }}
      />
      <View className="ml-5 relative flex-1">
        <Text className="text-base font-semibold">
          {item.title}
        </Text>
        <Text className="text-slate-600">
          Senggigi, Lombok.
        </Text>
        <View className="flex-row mt-3">
          <AntDesign 
            name="star" 
            size={12}
            color="#facc15" />
          <AntDesign 
            name="star" 
            size={12}
            color="#facc15" />
          <AntDesign 
            name="star" 
            size={12}
            color="#facc15" />
          <AntDesign 
          name="star" 
          size={12}
          color="#facc15" />
          <AntDesign 
          name="star" 
          color="#475569"
          size={12} />
        </View>
        <Text 
          className="absolute bottom-0 right-0 text-base font-medium">
          Rp.5000
        </Text>
      </View>
    </View>
  );
}