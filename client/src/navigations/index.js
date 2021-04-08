import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import UploadScreen from "../screens/Upload";
import UserDetailsScreen from "../screens/UserDetails";

const config = {
  screens: {
    Upload: "upload",
    UserDetails: "userDetails",
  },
};

const linking = {
  //   prefixes: ["https://careercompass.com", "careercompass://"],
  config,
};

const RootScreen = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Upload">
      <Stack.Screen
        name="Upload"
        component={UploadScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UserDetails"
        component={UserDetailsScreen}
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
