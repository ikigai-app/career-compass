import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import Test from "../../components/Test";
import { RootSafeAreaView } from "../../styles/RootView";

export default function HomeScreen() {
  return (
    <RootSafeAreaView style={{ flex: 1 }}>
      <Test />
    </RootSafeAreaView>
  );
}
