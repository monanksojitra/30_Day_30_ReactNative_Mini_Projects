import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const Home = ({ navigation }) => {
  const handleShowProject = () => {
    navigation.navigate("Home2");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>
        🚀 Boost your React Native skills with 30-Day Mini Project Challenges!
        🚀
      </Text>

      {/* Challenge Information */}
      <Text style={styles.description}>
        Enhance your React Native expertise and create impressive mobile
        applications with our 30-day challenge. Each day, you'll work on a
        unique mini project that includes a descriptive home screen and three
        informative paragraphs about the project. 🛠️ Take your skills to the
        next level and become a proficient React Native developer in just one
        month!
      </Text>

      {/* Second set of content */}
      <Text style={styles.header}>
        🌟 Take on the React Native challenge and level up your skills! 🌟
      </Text>
      <Text style={styles.description}>
        Join our 30-day React Native mini project challenges and enhance your
        expertise by creating a dynamic home screen context with an engaging
        project title and three informative paragraphs above. 🚀 Boost your
        portfolio and become a pro in no time!
      </Text>

      {/* Additional Content */}
      <Text style={styles.header}>
        🎉 Supercharge your React Native journey with daily projects! 🎉
      </Text>
      <Text style={styles.description}>
        Dive into a month of creativity, problem-solving, and fun! Our daily
        React Native mini projects are designed to keep you engaged and excited.
        🚀 Don't just code, create something amazing every day and watch your
        skills skyrocket!
      </Text>

      {/* Button to show the project */}
      <TouchableOpacity style={styles.button} onPress={handleShowProject}>
        <Text style={styles.buttonText}>Show Today's Project</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "justify",
    marginBottom: 10,
  },
  description: {
    textAlign: "justify",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Home;
