import styled from "styled-components/native";
import { Platform } from "react-native";
import { GRAY_LIGHT } from "../colors";

export const RootView = styled.View`
  background-color: ${GRAY_LIGHT};
  border-radius: 2px;
  margin: 0 ${Platform.OS === "web" ? 0 : `10px`};
  padding: 30px 20px;
  flex-direction: column;

  height: ${Platform.OS === "web" ? `500px` : `auto`};

  margin-top: ${Platform.OS === "web" ? `10px` : `auto`};
`;
