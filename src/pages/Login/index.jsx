import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableHighlight, TextInput, Image, ActivityIndicator } from "react-native";
import { useState } from "react";
import { userLogin } from "../../redux/slices/auth-slice";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesome } from "react-native-vector-icons";

export default function Login() {
  const dispatch = useDispatch();
  
  const auth = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleUserLogin = () => {
    dispatch(userLogin({email, password}));
  }

  const handleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  }

  return (
    <SafeAreaView>
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
          <Text className="mb-2 font-medium">
            Email
          </Text>
          <TextInput
          className="bg-slate-200 border border-slate-300 px-3 py-2 rounded-md focus:bg-transparent focus:border-2 focus:border-[#9450e7] text-slate-700"
          placeholder="Input your email"
          defaultValue={email}
          onChangeText={setEmail}
        />
        </View>

        <View className="mb-6">
          <Text className="mb-2 font-medium">
            Password
          </Text>
          <View className="relative">
            <TextInput
              className="bg-slate-200 border border-slate-300 pl-3 pr-10 py-2 rounded-md focus:bg-transparent focus:border-2 focus:border-[#9450e7] text-slate-700"
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

        <TouchableHighlight
          className="p-3 bg-[#9450e7] rounded-md"
          onPress={handleUserLogin}
        >
          {auth.loading ?
            <View className="flex-row justify-center gap-x-3">
              <ActivityIndicator size="small"  color="#fff" />
              <Text className="text-white">Processing...</Text>
            </View> :
            <Text 
              className="text-center text-white font-medium tracking-wider">
              Login
            </Text>
          }
        </TouchableHighlight>
        {auth.error && <Text className="text-red-500 mt-3">{auth.error}</Text>}
      </View>
    </SafeAreaView>
  );
}