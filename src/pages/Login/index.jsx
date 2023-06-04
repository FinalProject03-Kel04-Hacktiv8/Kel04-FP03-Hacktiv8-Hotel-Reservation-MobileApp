import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableHighlight, TextInput } from "react-native";
import { useState } from "react";
import { userLogin } from "../../redux/slices/auth-slice";
import { useSelector, useDispatch } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  
  const auth = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserLogin = () => {
    dispatch(userLogin({email, password}));
  }

  return (
    <SafeAreaView>
      <View className="px-5 py-20">
        <Text 
          className="text-3xl font-semibold">
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
          className="border border-slate-300 px-3 py-2 rounded-md focus:border-2 focus:border-[#2596be]"
          placeholder="Input your email"
          defaultValue={email}
          onChangeText={setEmail}
        />
        </View>

        <View className="mb-6">
          <Text className="mb-2 font-medium">
            Password
          </Text>
          <TextInput
          className="border border-slate-300 px-3 py-2 rounded-md focus:border-2 focus:border-[#2596be]"
          placeholder="Input your email"
          defaultValue={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        </View>

        <TouchableHighlight
          className="p-3 bg-[#2596be] rounded-md"
          onPress={handleUserLogin}
        >
          <Text 
          className="text-center text-white font-medium tracking-wider">
            Login
          </Text>
        </TouchableHighlight>
        <View>
          {auth.loading && <Text>Loading...</Text>}
          {auth.error && <Text>{auth.error}</Text>}
        </View>
      </View>
    </SafeAreaView>
  );
}