import React, { useState, useEffect } from "react";
import { View, FlatList, Linking } from "react-native";
import {
  Card,
  Title,
  Paragraph,
  Button,
  Menu,
  Appbar,
  Provider,
} from "react-native-paper";
import axios from "axios";

const Pro_9 = () => {
  const [articles, setArticles] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("general"); // Default category

  const API_KEY = ""; // Replace with your News API key

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=${selectedCategory}&apiKey=${API_KEY}`
        );

        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [selectedCategory]);

  const openArticle = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Error opening URL:", err)
    );
  };

  const handleToggleMenu = () => setVisible(!visible);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setVisible(false);
  };

  const renderItem = ({ item }) => (
    <Card style={{ margin: 8 }} onPress={() => openArticle(item.url)}>
      <Card.Cover
        style={{ padding: 10, backgroundColor: "#fff" }}
        source={{
          uri: item.urlToImage
            ? item.urlToImage
            : "https://img.freepik.com/free-vector/abstract-coming-soon-halftone-style-background-design_1017-27282.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704240000&semt=ais",
        }}
      />
      <Card.Content>
        <Title style={{ fontSize: 18, fontWeight: "800" }}>{item.title}</Title>
        <Paragraph>{item.description}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => openArticle(item.url)}>Read Full Article</Button>
      </Card.Actions>
    </Card>
  );

  return (
    <Provider>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
            backgroundColor: "#E5E1DA",
            paddingHorizontal: 10,
            borderRadius: 5,
            marginTop: 10,
          }}
        >
          <Title style={{ textAlign: "center", marginVertical: 10 }}>
            News - {selectedCategory}
          </Title>

          <Menu
            visible={visible}
            onDismiss={() => setVisible(false)}
            anchor={
              <Appbar.Action icon="dots-vertical" onPress={handleToggleMenu} />
            }
          >
            <Menu.Item
              onPress={() => handleCategorySelect("general")}
              title="General"
            />
            <Menu.Item
              onPress={() => handleCategorySelect("business")}
              title="Business"
            />
            <Menu.Item
              onPress={() => handleCategorySelect("technology")}
              title="Technology"
            />

            {/* Add more categories as needed */}
          </Menu>
        </View>
        <FlatList
          data={articles}
          keyExtractor={(item) => item.url}
          renderItem={renderItem}
        />
      </View>
    </Provider>
  );
};

export default Pro_9;
