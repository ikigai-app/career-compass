import React from "react";
import GraphqlTest from "../../components/GraphqlTest";
import Test from "../../components/Test";
import { RootSafeAreaView } from "../../styles/RootView";

export default function HomeScreen() {
  return (
    <RootSafeAreaView style={{ flex: 1 }}>
      {/* <Test /> */}
      <GraphqlTest />
    </RootSafeAreaView>
  );
}
