import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Button } from "react-native-paper";

const Pro_3 = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonPress = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = eval(input);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
        🧮 Calculator
      </Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 16,
          paddingHorizontal: 8,
        }}
        placeholder="Enter expression"
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <Button mode="contained" onPress={() => handleButtonPress("1")}>
          1
        </Button>
        <Button mode="contained" onPress={() => handleButtonPress("2")}>
          2
        </Button>
        <Button mode="contained" onPress={() => handleButtonPress("3")}>
          3
        </Button>
        <Button mode="contained" onPress={() => handleButtonPress("+")}>
          +
        </Button>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <Button mode="contained" onPress={() => handleButtonPress("4")}>
          4
        </Button>
        <Button mode="contained" onPress={() => handleButtonPress("5")}>
          5
        </Button>
        <Button mode="contained" onPress={() => handleButtonPress("6")}>
          6
        </Button>
        <Button mode="contained" onPress={() => handleButtonPress("-")}>
          -
        </Button>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <Button mode="contained" onPress={() => handleButtonPress("7")}>
          7
        </Button>
        <Button mode="contained" onPress={() => handleButtonPress("8")}>
          8
        </Button>
        <Button mode="contained" onPress={() => handleButtonPress("9")}>
          9
        </Button>
        <Button mode="contained" onPress={() => handleButtonPress("*")}>
          *
        </Button>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <Button mode="contained" onPress={() => handleButtonPress("0")}>
          0
        </Button>
        <Button mode="contained" onPress={() => handleClear()}>
          C
        </Button>
        <Button mode="contained" onPress={() => handleCalculate()}>
          =
        </Button>
        <Button mode="contained" onPress={() => handleButtonPress("/")}>
          /
        </Button>
      </View>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Result: {result}</Text>
    </View>
  );
};

export default Pro_3;
