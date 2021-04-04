import React from "react";
import { RootSafeAreaView } from "../../styles/RootView";
import UploadComponent from "../../components/Upload";

export default function HomeScreen() {
  return (
    <RootSafeAreaView>
      <UploadComponent />
    </RootSafeAreaView>
  );
}
