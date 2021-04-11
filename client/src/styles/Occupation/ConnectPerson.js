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
  height: ${Platform.OS === "web" ? windowHeight - 60 : `auto`};
`;

export const PersonCardContainer = styled.View`
  margin: 20px 0;
  border-color: black;
  padding: 10px 5px;
  flex-direction: row;
  position: relative;
`;

export const RightSection = styled.View`
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 5px;
  flex: 1;
`;

export const NameContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DescriptionContainer = styled.View`
  width: ${Platform.OS === "web" ? `100%` : `100%`};
  flex-direction: row;
  align-items: flex-start;
  margin-top: 5px;
`;

export const IconContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
export const IconContainerChild = styled.View`
  width: 90%;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  justify-content: flex-start;
`;

export const LinkBtnContainer = styled.TouchableOpacity`
  margin: 5px;
`;

export const LinkUrlText = styled.Text`
  color: midnightblue;
  font-size: 14px;
`;

export const SocialMediaContainer = styled.View`
  flex-direction: column;
  width: 90%;
`;
