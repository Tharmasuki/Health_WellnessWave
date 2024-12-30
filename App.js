import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Components/LoginScreen";
import SignUpScreen from "./Components/SignUpScreen";
import HomePage from "./Screens/HomeScreen";
import { CountProvider } from "./Context/CountContext"; // Import CountProvider

const Stack = createStackNavigator();

export default function App() {
  return (
    <CountProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Register">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CountProvider>
  );
}
