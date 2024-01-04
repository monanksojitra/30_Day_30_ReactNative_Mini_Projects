import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button, Snackbar } from "react-native-paper";
import Toast from "react-native-toast-message";

const Pro_6 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      // Login successful
      Toast.show({
        type: "success",
        text1: "Login Successful",
      });
    } else {
      // Login failed
      setSnackbarMessage("Invalid username or password");
      setSnackbarVisible(true);
      Toast.show({
        type: "error",
        text1: "Login Failed",
        text2: "Invalid username or password",
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Animated Login Screen</Text>
      <TextInput
        style={styles.input}
        label="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
      >
        {snackbarMessage}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color: "#000",
  },
  input: {
    width: "100%",
    marginVertical: 8,
  },
  button: {
    marginTop: 16,
  },
});

export default Pro_6;
