import styled from "styled-components/native";
import { Platform } from "react-native";
import { GRAY_LIGHT } from "../colors";

export const RootView = styled.View`
  background-color: ${GRAY_LIGHT};
  border-radius: 2px;

  margin: 0 ${Platform.OS === "web" ? 0 : `10px`};
  padding: 30px 20px;
  flex-direction: column;
  /* height: ${Platform.OS === "web" ? `500px` : `auto`}; */
  margin-top: ${Platform.OS === "web" ? `10px` : `auto`};
  /* height: auto; */
  /* flex: 1; */
`;

export const RootFlatListContainer = styled.View`
  margin-top: 30px;
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
  /* background-color: red; */
  padding: 5px 5px;
`;
