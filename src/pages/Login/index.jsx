import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableHighlight, TextInput, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { userLogin, userAuthenticated } from "../../redux/slices/auth-slice";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesome } from "react-native-vector-icons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function Login({ route }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const prevRoute = route?.params?.prevRoute || "Home";
  
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  useEffect(() => {
    if (auth.token) {
      if (prevRoute === "Detail") {
        navigation.navigate(/* boking page */);
      } else {
        navigation.navigate(prevRoute);
      }
  
      dispatch(userAuthenticated(true));
    }

  }, [auth.token]);

  const handleUserLogin = () => {
    dispatch(userLogin({email, password, user}));
  }

  const handleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  }

  return (
    <View>
      <Appbar.Header>
        <Appbar.Action icon="keyboard-backspace" onPress={() => navigation.navigate("Home")} />
        <Appbar.Content
          title={
            <Text className="text-lg">
            <MaterialCommunityIcons name="cards-outline" size={26} />
            Sign {" "}
            <Text className="text-purple-700 font-semibold">In</Text>
          </Text>
          }
          mode="center-aligned"
          style={{ alignItems: "center" }}
        />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
      <View className="px-5 py-16">
        <Text 
          className="text-3xl text-[#9450e7] font-semibold">
          Hello,
        </Text>
        <Text 
          className="text-3xl font-semibold">
          Welcome Back!
        </Text>

        <Text className="text-slate-500 text-base mb-12 mt-2">
          Enter your credentials to continue.
        </Text>

        <View className="mb-6">
          <Text className="mb-2 font-medium text-base">
            Email
          </Text>
          <TextInput
          className="bg-slate-200 border border-slate-300 px-3 py-2 rounded-md focus:bg-transparent focus:border-2 focus:border-[#9450e7] text-slate-700 text-base"
          placeholder="Input your email"
          defaultValue={email}
          onChangeText={setEmail}
        />
        </View>

        <View className="mb-6">
          <Text className="mb-2 font-medium text-base">
            Password
          </Text>
          <View className="relative">
            <TextInput
              className="bg-slate-200 border border-slate-300 pl-3 pr-10 py-2 rounded-md focus:bg-transparent focus:border-2 focus:border-[#9450e7] text-slate-700 text-base"
              placeholder="Input your password"
              defaultValue={password}
              onChangeText={setPassword}
              secureTextEntry={secureTextEntry}
            />
            {password !== "" &&
              <FontAwesome
                className="absolute top-3 right-3 text-slate-600"
                onPress={handleSecureTextEntry}
                name={secureTextEntry ? "eye-slash" : "eye"}
                size={20}
              />
            }
          </View>
        </View>
        {(!email.length || !password.length) ?
          <TouchableHighlight 
            className="p-3 bg-slate-400 rounded-md"
            disabled>
            <Text className="text-center text-center text-white font-medium text-base">Sign In</Text>
          </TouchableHighlight> :
          <TouchableHighlight
            className="p-3 bg-[#9450e7] rounded-md"
            onPress={handleUserLogin}
          >
            {auth.loading ?
              <View className="flex-row justify-center gap-x-3">
                <ActivityIndicator size="small"  color="#fff" />
                <Text className="text-white text-base font-medium">Processing...</Text>
              </View> :
              <Text 
                className="text-center text-white font-medium text-base">
                Sign In
              </Text>
            }
          </TouchableHighlight>
        }
        
        {auth.error && <Text className="text-red-500 mt-3">{auth.error}</Text>}
      </View>
    </View>
  );
}