import styled from "styled-components/native";
import { Platform } from "react-native";
import { WHITE } from "./colors";

export const TouchableContainer = styled.TouchableOpacity`
  background-color: slategray;
  /* padding: 10px 20px;
   */
  border-radius: 8px;
  width: ${Platform.OS === "web" ? `180px` : `140px`};
  height: ${Platform.OS === "web" ? `70px` : `55px`};
  justify-content: center;
`;

export const TouchableText = styled.Text`
  font-size: ${Platform.OS === "web" ? `18px` : `16px`};
  color: ${WHITE};
  font-weight: 700;
  text-align: center;
`;
