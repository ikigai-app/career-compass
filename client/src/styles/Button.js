import styled from "styled-components/native";
import { WHITE } from "./colors";

export const TouchableContainer = styled.TouchableOpacity`
  background-color: slategray;
  padding: 10px 20px;
  border-radius: 8px;
`;

export const TouchableText = styled.Text`
  font-size: 14px;
  color: ${WHITE};
  font-weight: 700;
`;
