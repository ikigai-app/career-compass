import styled from "styled-components/native";
import { Platform } from "react-native";
import { CARD_COLOR, GRAY_LIGHT } from "../colors";

export const RootView = styled.View`
  background-color: ${CARD_COLOR};
  border-radius: 2px;
  margin: 0 ${Platform.OS === "web" ? 0 : `10px`};
  padding: 30px 20px;
  flex-direction: column;
  max-height: ${Platform.OS === "web" ? `250px` : `auto`};
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DescriptionContainer = styled.View`
  width: ${Platform.OS === "web" ? `100%` : `100%`};
  flex-direction: row;
  align-items: flex-start;
  margin-top: 5px;
`;
