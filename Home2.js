import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const Home2 = ({ navigation }) => {
  // Sample data for mini projects
  const miniProjectsData = [
    {
      id: 1,
      title: "👋 Hello World App",
      description:
        "Experience the joy of saying 'Hi' to the app world with this delightful application. Share positivity and greetings in the digital realm!",
      img_url:
        "https://miro.medium.com/v2/resize:fit:1024/1*aWNOSHMVXoxMwpKqOBiC8g@2x.jpeg",
    },
    {
      id: 2,
      title: "✅ ToDo List",
      description:
        "Organize your life seamlessly with the ToDo List app. Prioritize tasks, set deadlines, and conquer your day with efficiency!",
      img_url: "https://i.ytimg.com/vi/2MjAAcF0L5s/maxresdefault.jpg",
    },
    {
      id: 3,
      title: "➕ Calculator",
      description:
        "Say goodbye to mental math struggles! The Calculator app is here to make complex calculations a breeze. Math without stress!",
      img_url:
        "https://i.ytimg.com/vi/XgxF-S00XpU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA9FQ850DIf9v97nFvUorGHe9Auhg",
    },
    {
      id: 4,
      title: "📸 Photo Gallery",
      description:
        "Turn your memories into a visual masterpiece. The Photo Gallery app provides a perfect space for your cherished cat pics and more to shine!",
      img_url: "https://i.ytimg.com/vi/3qwlvSycKqA/maxresdefault.jpg",
    },
    {
      id: 5,
      title: "🎵 Music Player",
      description:
        "Transform your shower concerts into a digital extravaganza! The Music Player app brings your favorite tunes to your fingertips.",
      img_url: "https://i.ytimg.com/vi/wPvwQulqV6Y/maxresdefault.jpg",
    },
    {
      id: 6,
      title: "🚪 Animated Login Screen",
      description:
        "Make a stylish entrance with the Animated Login Screen app. Leave a lasting impression as you navigate through a visually stunning login experience!",
      img_url: "https://i.ytimg.com/vi/dj0zN72phDo/maxresdefault.jpg",
    },
    {
      id: 7,
      title: "⚖️ BMI Calculator",
      description:
        "Your personal gym buddy in app form! The BMI Calculator app helps you keep track of your fitness journey and stay in shape.",
      img_url: "https://i.ytimg.com/vi/a4qFLUiAEDY/maxresdefault.jpg",
    },
    {
      id: 8,
      title: "🗺️ Map Integration",
      description:
        "Navigate the world without getting lost. Literally. The Map Integration app guides you to your destination with ease and precision.",
      img_url:
        "https://miro.medium.com/v2/resize:fit:1088/1*7DEWkm_3CYi9_RHhSRqQxg.png",
    },
    {
      id: 9,
      title: "📰 News Reader",
      description:
        "Stay informed with the News Reader app. Access the latest news at your fingertips, from global events to the latest gossip. Your news, your way!",
      img_url:
        "https://instamobile.io/wp-content/uploads/2019/02/cover-news-reader-app-template-iphone-x-wordpress.png",
    },
    {
      id: 10,
      title: "❓ Quiz App",
      description:
        "Challenge yourself and prove you're a trivia whiz with the Quiz App. Fun quizzes that entertain and test your knowledge!",
      img_url: "https://i.ytimg.com/vi/esWUVic6IcU/maxresdefault.jpg",
    },
  ];

  // Render individual mini project cards
  const renderMiniProjectCard = ({ item }) => (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: item.img_url }} />
      <Card.Content>
        <Title style={styles.title}>{item.title}</Title>
        <Paragraph>{item.description}</Paragraph>
      </Card.Content>
      <Card.Actions style={styles.btn}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(`Project_${item.id}`, { projectId: item.id })
          }
          style={styles.button}
        >
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={miniProjectsData}
        keyExtractor={(item) => item.id}
        renderItem={renderMiniProjectCard}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: { fontWeight: "600" },
  card: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  btn: { justifyContent: "center", marginVertical: 10 },
});

export default Home2;
