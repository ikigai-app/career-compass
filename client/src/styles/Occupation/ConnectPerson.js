import styled from "styled-components/native";
import { Platform, Dimensions } from "react-native";
import { BACKGROUND_COLOR, GRAY_LIGHT } from "../colors";
const windowHeight = Dimensions.get("window").height;

export const RootView = styled.View`
  flex-direction: column;
  background-color: ${GRAY_LIGHT};
  border-radius: 2px;

  flex: ${Platform.OS === "web" ? `1` : `none`};
  width: ${Platform.OS === "web" ? `auto` : `95%`};
  margin: ${Platform.OS === "web" ? `0` : `10px`}
    ${Platform.OS === "web" ? `auto` : `auto`};
  margin-left: ${Platform.OS === "web" ? `20px` : `auto`};
  padding: ${Platform.OS === "web" ? `25px` : `20px`};
  height: ${windowHeight - 50};
`;
