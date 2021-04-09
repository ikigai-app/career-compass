import styled from "styled-components/native";
import { Platform } from "react-native";
import { GRAY_DARK, WHITE } from "./colors";

export const SearchContainer = styled.View`
  background-color: ${GRAY_DARK};
  height: ${Platform.OS === "web" ? `70px` : `50px`};
  width: ${Platform.OS === "web" ? `50%` : `90%`};
  border-radius: 10px;
  margin-bottom: ${Platform.OS === "web" ? `30px` : `15px`};
  padding-left: 15px;

  align-content: center;
  flex-direction: row;
`;

export const Image = styled.Image`
  width: ${Platform.OS === "web" ? `28px` : `22px`};
  height: ${Platform.OS === "web" ? `28px` : `22px`};
  opacity: 0.8;
`;

export const SearchTextInput = styled.TextInput`
  font-size: ${Platform.OS === "web" ? `20px` : `16px`};
  padding-left: 10px;
  color: ${WHITE};
  flex: 1;
  /* outline: none !important; */
`;
