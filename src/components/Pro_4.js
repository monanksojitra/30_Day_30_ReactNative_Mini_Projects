import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Button,
  StyleSheet,
  Dimensions,
} from "react-native";
import * as MediaLibrary from "expo-media-library";

const Pro_4 = () => {
  const [localImages, setLocalImages] = useState([]);

  useEffect(() => {
    requestCameraRollPermission();
  }, []);

  const requestCameraRollPermission = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === "granted") {
      console.log("Permission granted");
      fetchLocalImages();
    } else {
      console.log("Permission denied");
    }
  };

  const fetchLocalImages = async () => {
    try {
      const album = await MediaLibrary.getAlbumAsync("Photos");
      if (album) {
        const photos = await MediaLibrary.getAssetsAsync({
          album: album,
          first: 20,
        }); // Fetching 20 photos, adjust as needed
        const uris = photos.assets.map((photo) => photo.uri);
        setLocalImages(uris);
      }
    } catch (error) {
      console.log("Error reading directory:", error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item }} style={styles.image} />
    </View>
  );

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
        📸 Photo Gallery
      </Text>
      <FlatList
        data={localImages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        numColumns={3} // Number of columns in the grid
      />
      <Button title="Scan for Photos" onPress={fetchLocalImages} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    margin: 8,
  },
  image: {
    width: Dimensions.get("window").width / 3 - 16, // Adjust the width based on the number of columns
    height: Dimensions.get("window").width / 3 - 16, // Adjust the height based on the number of columns
    borderRadius: 8,
    resizeMode: "cover",
  },
});

export default Pro_4;
