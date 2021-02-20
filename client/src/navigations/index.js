import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScreenOne from "../screens/ScreenOne";
import ScreenTwo from "../screens/ScreenTwo";

const config = {
  screens: {
    Home: "home",
    GraphQL: "graphql",
  },
};

const linking = {
  //   prefixes: ["https://careercompass.com", "careercompass://"],
  config,
};

// const RootScreen = () => {
//   const Stack = createStackNavigator();

//   return (
//     <Stack.Navigator initialRouteName="Graphql">
//       <Stack.Screen name="Home" component={ScreenOne} />
//       <Stack.Screen name="Graphql" component={ScreenTwo} />
//     </Stack.Navigator>
//   );
// };

const Tab = createBottomTabNavigator();

function RootScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={ScreenOne} />
      <Tab.Screen name="GraphQL" component={ScreenTwo} />
    </Tab.Navigator>
  );
}

function RootNavigation() {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <RootScreen />
    </NavigationContainer>
  );
}

export default RootNavigation;
