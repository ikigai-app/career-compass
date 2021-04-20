import styled from "styled-components/native";
import { Platform } from "react-native";
import { BACKGROUND_COLOR, GRAY_LIGHT, CARD_COLOR } from "../colors";

export const RootView = styled.View`
  background-color: ${CARD_COLOR};
  border-radius: 2px;
  margin: 0 ${Platform.OS === "web" ? 0 : `10px`};
  padding: ${Platform.OS === "web" ? `50px` : `40px`} 20px;
  flex-direction: column;

  height: ${Platform.OS === "web" ? `500px` : `auto`};

  margin-top: ${Platform.OS === "web" ? `10px` : `auto`};
  margin-bottom: ${Platform.OS === "web" ? `0` : `10px`};
`;
