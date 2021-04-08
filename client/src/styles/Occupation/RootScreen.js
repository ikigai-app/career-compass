import styled from "styled-components/native";
import { Platform } from "react-native";
import { BACKGROUND_COLOR } from "../colors";

export const RootView = styled.View`
  flex: 1;
  background-color: ${(props) =>
    props.theme.rootBackground || BACKGROUND_COLOR};
  padding: 50px 0px;
  align-content: center;
  align-items: center;
`;

export const FlatListContainer = styled.View`
  width: ${Platform.OS === "web" ? `80%` : `100%`};
  justify-content: center;
  align-content: center;
`;
