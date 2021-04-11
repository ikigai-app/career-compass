import styled from "styled-components/native";
import { Platform } from "react-native";
import { BLACK, GRAY_DARK, GRAY_MEDIUM, GRAY_LIGHT, WHITE } from "./colors";

export const Container = styled.View`
  width: 100%;
  align-content: center;
  margin-top: 20px;
`;

export const Card = styled.View`
  margin: auto;
  width: ${Platform.OS === "web" ? `45%` : `90%`};
  padding: 20px 0px;
  background-color: ${GRAY_LIGHT};
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;

export const Title = styled.Text`
  color: ${BLACK};
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
`;

export const SubTitle = styled.Text`
  color: ${GRAY_DARK};
  font-size: 14px;
  font-weight: 600;
`;
