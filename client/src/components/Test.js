import "@expo/match-media";
import React from "react";
import { View, Text, Platform } from "react-native";
import { useMediaQuery } from "react-responsive";

function Header({ style, ...props } = {}) {
  return (
    <Text
      accessibilityLabel="header"
      style={[
        {
          fontWeight: "bold",
          marginBottom: 24,
          fontSize: Platform.select({ web: "2.25rem", default: 2.25 * 16 }),
        },
        style,
      ]}
      {...props}
    />
  );
}

export default function Test() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Header>Device Test!</Header>
      {isMobile && <Text>Mobile</Text>}
      {isDesktop && <Text>Desktop</Text>}
    </View>
  );
}
