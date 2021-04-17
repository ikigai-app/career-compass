import styled from "styled-components/native";
import { Platform } from "react-native";
import { GRAY_DARK, GRAY_LIGHT, WHITE } from "../colors";

export const RootView = styled.View`
  background-color: ${GRAY_LIGHT};
  border-radius: 2px;
  margin: 10px ${Platform.OS === "web" ? 0 : `10px`};
  padding: 30px 20px;
  flex-direction: column;
`;

export const VideoContainer = styled.View`
  width: ${Platform.OS === "web" ? `350` : `auto`};
  padding: 10px;
  background-color: ${WHITE};
`;

export const VideoDescription = styled.Text`
  font-size: 14px;
  color: ${GRAY_DARK};
  font-weight: 600;
  /* text-align: center; */
`;

export const BlogContainer = styled.View`
  width: ${Platform.OS === "web" ? `350` : `auto`};
  background-color: ${WHITE};
  height: ${Platform.OS === "web" ? `auto` : `200px`};
  justify-content: center;
  position: relative;
`;

export const BlogText = styled.Text`
  font-size: 18px;
  color: ${GRAY_DARK};
  margin: 20px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
`;

export const InputRootContainer = styled.View`
  margin-left: ${Platform.OS === "web" ? `50px` : `0`};
  margin-top: 40px;
  flex-direction: ${Platform.OS === "web" ? `row` : `column`};
  justify-content: flex-start;
  width: ${Platform.OS === "web" ? `90%` : `auto`};
`;

export const AddButton = styled.TouchableOpacity`
  margin-left: ${Platform.OS === "web" ? `10px` : `0`};
  /* background-color: red; */
  height: 40px;
  width: 80px;
  background-color: #808080;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const AddText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${WHITE};
`;
