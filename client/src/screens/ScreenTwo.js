import React from "react";
import { View, Text, ScrollView } from "react-native";
import GraphqlTest from "../components/GraphqlTest";

export default function ScreenTwo() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <GraphqlTest />
    </ScrollView>
  );
}
