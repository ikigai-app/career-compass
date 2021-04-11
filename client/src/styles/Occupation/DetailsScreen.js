import styled from "styled-components/native";
import { Platform } from "react-native";
import { BACKGROUND_COLOR } from "../colors";

export const RootView = styled.View`
  /* flex: 1; */
  flex-direction: ${Platform.OS === "web" ? `row` : `column`};

  margin: ${Platform.OS === "web" ? `30px` : "50px"}
    ${Platform.OS === "web" ? `30px` : `2px`}
    ${Platform.OS === "web" ? `30px` : `15px`};
`;
