import styled from "styled-components/native";
import { Platform } from "react-native";
// import { GRAY_LIGHT } from "../colors";

export const Text = styled.Text`
  font-size: ${Platform.OS === "web" ? `22px` : `20px`};
  font-weight: ${Platform.OS === "web" ? 800 : `bold`};
`;
