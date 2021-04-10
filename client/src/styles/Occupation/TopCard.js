import styled from "styled-components/native";
import { Platform } from "react-native";
import { BACKGROUND_COLOR, GRAY_LIGHT } from "../colors";

export const RootView = styled.View`
  background-color: ${GRAY_LIGHT};
  border-radius: 2px;
  width: ${Platform.OS === "web" ? `60%` : `95%`};
  margin: 0 ${Platform.OS === "web" ? 0 : `auto`};
  padding: 30px 20px;
  flex-direction: column;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DescriptionContainer = styled.View`
  width: ${Platform.OS === "web" ? `100%` : `100%`};
  flex-direction: row;
  align-items: flex-start;
  margin-top: 10px;
`;
