import React, { useState } from "react";
import { View, Text, TextInput, FlatList } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";

const Pro_2 = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo("");
    }
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const renderItem = ({ item }) => (
    <Card style={{ marginVertical: 8 }}>
      <Card.Content style={{ flexDirection: "row", alignItems: "center" }}>
        <Paragraph style={{ flex: 1 }}>{item.text}</Paragraph>
        <Button onPress={() => deleteTodo(item.id)}>Delete</Button>
      </Card.Content>
    </Card>
  );

  return (
    <View style={{ padding: 16 }}>
      <Title style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
        ✅ ToDo List
      </Title>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <TextInput
          style={{
            height: 40,

            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 16,
            paddingHorizontal: 8,
          }}
          placeholder="Add a new task..."
          value={newTodo}
          onChangeText={(text) => setNewTodo(text)}
        />
        <Button mode="contained" onPress={addTodo} style={{ marginBottom: 16 }}>
          Add Task
        </Button>
      </View>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Pro_2;
