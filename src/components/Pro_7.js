import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  TextInput,
  Button,
  Snackbar,
  Portal,
  Dialog,
  Paragraph,
  DarkTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import Toast from "react-native-toast-message";

const Pro_7 = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [dialogVisible, setDialogVisible] = useState(false);

  const calculateBMI = () => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (!isNaN(weightValue) && !isNaN(heightValue) && heightValue > 0) {
      const bmi = weightValue / (heightValue * heightValue);
      setSnackbarMessage(`BMI: ${bmi.toFixed(2)}`);
      setSnackbarVisible(true);
      showBMIAdviceDialog(bmi);
    } else {
      setSnackbarMessage("Invalid input. Please enter valid values.");
      setSnackbarVisible(true);
    }
  };

  const showBMIAdviceDialog = (bmi) => {
    let category, advice;

    if (bmi < 18.5) {
      category = "Underweight";
      advice =
        "You may need to gain some weight. Consult with a healthcare professional.";
    } else if (bmi < 24.9) {
      category = "Normal weight";
      advice = "Congratulations! Your weight is within the healthy range.";
    } else if (bmi < 29.9) {
      category = "Overweight";
      advice =
        "Consider losing some weight. Consult with a healthcare professional.";
    } else {
      category = "Obese";
      advice =
        "It's important to lose weight for a healthier lifestyle. Consult with a healthcare professional.";
    }

    setDialogVisible(true);
    setSnackbarMessage(`BMI: ${bmi.toFixed(2)} - ${category}`);
    Toast.show({
      type: "info",
      text1: category,
      text2: advice,
    });
  };

  return (
    <PaperProvider theme={DarkTheme}>
      <View style={styles.container}>
        <Text style={styles.title}>BMI Calculator</Text>
        <TextInput
          style={styles.input}
          label="Weight (kg)"
          keyboardType="numeric"
          value={weight}
          onChangeText={(text) => setWeight(text)}
          theme={{ colors: { primary: "#FFF", background: "#424242" } }}
        />
        <TextInput
          style={styles.input}
          label="Height (m)"
          keyboardType="numeric"
          value={height}
          onChangeText={(text) => setHeight(text)}
          theme={{ colors: { primary: "#FFF", background: "#424242" } }}
        />
        <Button mode="contained" onPress={calculateBMI} style={styles.button}>
          Calculate BMI
        </Button>

        <Snackbar
          visible={snackbarVisible}
          onDismiss={() => setSnackbarVisible(false)}
          duration={3000}
        >
          {snackbarMessage}
        </Snackbar>

        <Portal>
          <Dialog
            visible={dialogVisible}
            onDismiss={() => setDialogVisible(false)}
          >
            <Dialog.Title>BMI Advice</Dialog.Title>
            <Dialog.Content>
              <Paragraph>{snackbarMessage}</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setDialogVisible(false)}>Close</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#424769", // Dark background color
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color: "#FFF", // Adjust text color for dark theme
  },
  input: {
    width: "100%",
    marginVertical: 8,
    backgroundColor: "#7077A1", // Light background color for input
  },
  button: {
    marginTop: 16,
    backgroundColor: "#F6B17A",
  },
});

export default Pro_7;
