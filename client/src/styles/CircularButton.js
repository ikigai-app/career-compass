import styled from "styled-components/native";
import { Platform } from "react-native";
import { WHITE } from "./colors";

export const TouchableContainer = styled.TouchableOpacity`
  background-color: slategray;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const TouchableText = styled.Text`
  font-size: 25px;
  color: ${WHITE};
  font-weight: 700;
  text-align: center;
`;
