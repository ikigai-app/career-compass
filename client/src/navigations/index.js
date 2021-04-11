import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import UploadScreen from "../screens/Upload";
import UserDetailsScreen from "../screens/UserDetails";
import OccupationScreen from "../screens/Occupation";
import OccupationDetailsScreen from "../screens/Occupation/OccupationDetails";

const config = {
  screens: {
    Upload: "upload",
    UserDetails: "userDetails",
    OccupationScreen: "occupation",
    OccupationDetailsScreen: "OccupationDetails/:id",
  },
};

const linking = {
  //   prefixes: ["https://careercompass.com", "careercompass://"],
  config,
};

const Root = createStackNavigator();
const Occupation = createStackNavigator();

const OccupationScreenRoot = () => {
  return (
    <Occupation.Navigator initialRouteName="Occupation">
      <Occupation.Screen
        name="Occupation"
        component={OccupationScreen}
        options={{
          headerShown: false,
        }}
      />
      <Occupation.Screen
        name="OccupationDetails"
        component={OccupationDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Occupation.Navigator>
  );
};

const RootScreen = () => {
  return (
    <Root.Navigator initialRouteName="Upload">
      <Root.Screen
        name="Upload"
        component={UploadScreen}
        options={{
          headerShown: false,
        }}
      />
      <Root.Screen
        name="UserDetails"
        component={UserDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Root.Screen
        name="Occupation"
        component={OccupationScreenRoot}
        options={{
          headerShown: false,
        }}
      />
    </Root.Navigator>
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
