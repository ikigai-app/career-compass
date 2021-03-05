import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home";

const config = {
  screens: {
    Home: "home",
  },
};

const linking = {
  //   prefixes: ["https://careercompass.com", "careercompass://"],
  config,
};

const RootScreen = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

function RootNavigation() {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <RootScreen />
    </NavigationContainer>
  );
}

export default RootNavigation;
