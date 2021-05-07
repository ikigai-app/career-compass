import styled from "styled-components/native";
import { Platform } from "react-native";
import { BACKGROUND_COLOR } from "../colors";

export const RootView = styled.View`
  flex: 1;
  position: relative;

  margin: ${Platform.OS === "web" ? `80px` : "50px"}
    ${Platform.OS === "web" ? `80px` : `2px`}
    ${Platform.OS === "web" ? `80px` : `15px`};
`;

export const FlatListContainer = styled.View`
  flex: 1;
  width: ${Platform.OS === "web" ? `100%` : `100%`};
  justify-content: center;
  align-content: center;
  margin-top: ${Platform.OS === "web" ? `35px` : `10px`};
`;

export const SearchBarContainer = styled.View`
  display: flex;
  width: 100%;
  margin: 0px 20px;
  flex-direction: row;
`;

export const SearchButtonContainer = styled.View`
  margin-left: ${Platform.OS === "web" ? `50px` : `0px`};
`;

export const CircularButtonContainer = styled.View`
  position: absolute;
  bottom: 0;
  right: 20px;
`;
