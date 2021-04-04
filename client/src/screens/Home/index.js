import React from "react";
import { RootSafeAreaView } from "../../styles/RootView";
import UploadComponent from "../../components/Upload";

export default function HomeScreen({ navigation }) {
  return (
    <RootSafeAreaView>
      <UploadComponent navigation={navigation} />
    </RootSafeAreaView>
  );
}
