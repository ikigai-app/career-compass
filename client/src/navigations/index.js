import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenOne from "../screens/ScreenOne";
import ScreenTwo from "../screens/ScreenTwo";

const config = {
  screens: {
    Home: "home",
    Graphql: "graphql",
  },
};

const linking = {
  //   prefixes: ["https://careercompass.com", "careercompass://"],
  config,
};

const HomeStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Graphql">
      <Stack.Screen name="Home" component={ScreenOne} />
      <Stack.Screen name="Graphql" component={ScreenTwo} />
    </Stack.Navigator>
  );
};

function RootNavigation() {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <HomeStack />
    </NavigationContainer>
  );
}

export default RootNavigation;
