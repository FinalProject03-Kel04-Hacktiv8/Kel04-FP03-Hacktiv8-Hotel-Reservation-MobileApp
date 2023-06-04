import AntDesign from "react-native-vector-icons/AntDesign";
import { View } from "react-native";

export default function Rates({ className, rates, iconSize = 12 }) {
  const stars = [];

  for(let i = 1; i <= 5; i++) {
    if (i > (Math.round(rates) / 2)) {
      stars.push(
        <AntDesign
          key={i}
          name="star"
          color="#cbd5e1"
          size={iconSize}
        />
      );
    }else {
      stars.push(
        <AntDesign
          key={i}
          name="star"
          color="#facc15"
          size={iconSize}
        />
      );
    }
  }

  return (
    <View className={className}>
      {stars}
    </View>
  );
}