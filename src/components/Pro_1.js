import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const Pro_1 = () => {
  const colors = [
    "#FF5733",
    "#33FF57",
    "#5733FF",
    "#FF33A1",
    "#33A1FF",
    "#A1FF33",
  ];
  const [textColor, setTextColor] = useState("#fff");

  useEffect(() => {
    // Function to change text color every 1 second
    const changeColorInterval = setInterval(() => {
      setTextColor(getRandomColor());
    }, 1000);

    // Set initial color when the component mounts
    return () => clearInterval(changeColorInterval);
  }, []);

  const getRandomColor = () => {
    // Randomly select a color from the array
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, color: textColor }}>
        👋 Hello World App
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Pro_1;
