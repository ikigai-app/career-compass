import styled from "styled-components/native";
import { Platform } from "react-native";
import { GRAY_LIGHT } from "../colors";

export const RootView = styled.View`
  background-color: ${GRAY_LIGHT};
  border-radius: 2px;
  margin: 0 ${Platform.OS === "web" ? 0 : `10px`};
  padding: 50px 20px;
  flex-direction: column;
  margin-top: ${Platform.OS === "web" ? `10px` : `auto`};
`;

export const RootFlatListContainer = styled.View`
  margin-top: 30px;
  padding-left: ${Platform.OS == "web" ? `20px` : 0};
`;

export const FlatListHeader = styled.View`
  margin-bottom: 10px;
`;

export const FlatListHeaderText = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: ${Platform.OS === "web" ? `60%` : `100%`};
  padding: 5px 5px;
`;
