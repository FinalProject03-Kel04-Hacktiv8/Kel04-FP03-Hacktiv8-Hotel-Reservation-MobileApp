import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { HelperText, TextInput } from "react-native-paper";

export const GuestAmount = ({ value, editable }) => {
  // const [value, setValue] = React.useState("");
  //   const [alert, setAlert] = React.useState("Input must a Number!");

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        keyboardType="numeric"
        label="Guest Amount"
        value={value}
        // onChangeText={(value) => setValue(value)}
        mode="outlined"
        editable={editable}
        left={<TextInput.Icon icon="account-multiple-outline" />}
        style={styles.inputText}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  inputText: {
    borderRadius: 10,
  },
});
