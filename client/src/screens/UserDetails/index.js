import React from "react";
import { View } from "react-native";
import Button from "../../components/Button";
import UserDetails from "../../components/UserDetails/UserDetails";
import { RootSafeAreaView } from "../../styles/RootView";

export default function UserDetailsScreen({ route, navigation }) {
  const { userName } = route.params;

  return (
    <RootSafeAreaView>
      <UserDetails userName={userName} />
      <View style={{ margin: 10 }} />
      <Button text="BACK" onPress={() => navigation.navigate("Upload")} />
    </RootSafeAreaView>
  );
}
