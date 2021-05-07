import styled from "styled-components/native";
import { Platform } from "react-native";
import { BLACK, GRAY_DARK, GRAY_MEDIUM, GRAY_LIGHT, WHITE } from "../colors";

export const RootContainer = styled.TouchableOpacity`
  margin: auto;
  width: ${Platform.OS === "web" ? `30%` : `90%`};
  height: ${Platform.OS === "web" ? `120px` : `100px`};
  background-color: ${GRAY_LIGHT};
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  position: relative;
`;

export const Title = styled.Text`
  color: ${BLACK};
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
`;
