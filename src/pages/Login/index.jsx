import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableHighlight, TextInput } from "react-native";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = () => {
    console.warn(email, password);
  }

  return (
    <SafeAreaView>
      <View>
        <Text>Hello,</Text>
        <Text>Welcome Back!</Text>
        <Text>Enter your credentials to continue.</Text>
        <View>
          <Text>Email</Text>
          <TextInput
          placeholder="input your email"
          defaultValue={email}
          onChangeText={setEmail}
        />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput
          placeholder="input your email"
          defaultValue={password}
          onChangeText={setPassword}
        />
        </View>
        <TouchableHighlight
          onPress={handleOnSubmit}
        >
          <Text>Login</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}