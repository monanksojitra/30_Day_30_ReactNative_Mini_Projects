import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const Pro_8 = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const getLocationAsync = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let locationData = await Location.getCurrentPositionAsync({});
      setLocation(locationData);
    } catch (error) {
      console.error("Error getting location:", error);
      setErrorMsg("Error getting location");
    }
  };

  useEffect(() => {
    getLocationAsync();
  }, []);

  return (
    <View style={styles.container}>
      {errorMsg && <Text style={styles.error}>{errorMsg}</Text>}
      {location && (
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              title="Your Location"
              description="You are here!"
            />
          </MapView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
  },
  error: {
    color: "red",
  },
  mapContainer: {
    flex: 1,
    width: "100%",
    height: 300,
    marginTop: 16,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Pro_8;
