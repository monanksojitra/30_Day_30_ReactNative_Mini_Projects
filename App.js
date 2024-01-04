import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Home2 from "./Home2";
import Pro_1 from "./src/components/Pro_1";
import Pro_2 from "./src/components/Pro_2";
import Pro_3 from "./src/components/Pro_3";
import Pro_4 from "./src/components/Pro_4";
import Pro_5 from "./src/components/Pro_5";
import Pro_6 from "./src/components/Pro_6";
import Pro_7 from "./src/components/Pro_7";
import Pro_8 from "./src/components/Pro_8";
import Pro_9 from "./src/components/Pro_9";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home2" component={Home2} options={{}} />
        <Stack.Screen name="Project_1" component={Pro_1} options={{}} />
        <Stack.Screen name="Project_2" component={Pro_2} options={{}} />
        <Stack.Screen name="Project_3" component={Pro_3} options={{}} />
        <Stack.Screen name="Project_4" component={Pro_4} options={{}} />
        <Stack.Screen name="Project_5" component={Pro_5} options={{}} />
        <Stack.Screen name="Project_6" component={Pro_6} options={{}} />
        <Stack.Screen name="Project_7" component={Pro_7} options={{}} />
        <Stack.Screen name="Project_8" component={Pro_8} options={{}} />
        <Stack.Screen name="Project_9" component={Pro_9} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
