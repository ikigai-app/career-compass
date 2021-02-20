import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import GraphqlTest from "../components/GraphqlTest";

export default function ScreenTwo() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <GraphqlTest />
      </ScrollView>
    </SafeAreaView>
  );
}
