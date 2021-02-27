import styled from "styled-components/native";
import { BLACK, GRAY_DARK, GRAY_MEDIUM, WHITE } from "./colors";

export const Container = styled.View`
  width: 100%;
  align-content: center;
  margin-top: 20px;
`;

export const Card = styled.View`
  margin: auto;
  width: 90%;
  height: 80px;
  background-color: ${WHITE};
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;

export const Title = styled.Text`
  color: ${BLACK};
  font-size: 16;
  font-weight: 600;
  line-height: 20px;
`;

export const SubTitle = styled.Text`
  color: ${GRAY_DARK};
  font-size: 14;
  font-weight: 400;
`;
