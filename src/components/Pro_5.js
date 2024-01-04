// import React, { useState, useEffect } from "react";
// import { View, Button, Text, Platform } from "react-native";
// import { Audio } from "expo-av";
// import * as Permissions from "expo-permissions";
// import * as MediaLibrary from "expo-media-library";

// const Pro_5 = () => {
//   const [sound, setSound] = useState();

//   useEffect(() => {
//     // Request permissions when the component mounts
//     requestPermissions();

//     return () => {
//       // Cleanup when component unmounts
//       if (sound) {
//         sound.unloadAsync();
//       }
//     };
//   }, [sound]);

//   const requestPermissions = async () => {
//     try {
//       // Request permission to access media library
//       const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);

//       if (status !== "granted") {
//         console.error("Permission to access media library denied");
//       }
//     } catch (error) {
//       console.error("Error requesting permissions:", error);
//     }
//   };

//   const playSound = async () => {
//     try {
//       // Prompt user to pick an audio file from their device
//       const { uri } = await pickAudio();

//       // Load the selected audio file
//       const { sound } = await Audio.Sound.createAsync({ uri });

//       // Save the sound instance to state
//       setSound(sound);

//       // Play the audio
//       await sound.playAsync();
//     } catch (error) {
//       console.error("Error playing audio:", error);
//     }
//   };

//   const pickAudio = async () => {
//     try {
//       // Request permission to access media library
//       const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);

//       if (status !== "granted") {
//         console.error("Permission to access media library denied");
//         return;
//       }

//       // Prompt user to pick an audio file from their device
//       const result = await MediaLibrary.getAssetsAsync({
//         mediaType: MediaLibrary.MediaType.audio,
//       });

//       if (result?.assets.length > 0) {
//         const pickedAudio = result.assets[0];
//         return { uri: pickedAudio.uri };
//       } else {
//         console.error("No audio files found in media library");
//         return {};
//       }
//     } catch (error) {
//       console.error("Error picking audio:", error);
//       return {};
//     }
//   };

//   const logSoundStatus = async () => {
//     try {
//       // Get the status of the sound
//       const status = await sound.getStatusAsync();
//       console.log("Audio Status:", status);
//     } catch (error) {
//       console.error("Error getting audio status:", error);
//     }
//   };

//   return (
//     <View>
//       <Button title="Play Audio" onPress={playSound} />
//       <Button title="Log Audio Status" onPress={logSoundStatus} />
//     </View>
//   );
// };

// export default Pro_5;

import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Pro_5 = () => {
  return (
    <View>
      <Text>Pro_5</Text>
    </View>
  );
};

export default Pro_5;

const styles = StyleSheet.create({});
