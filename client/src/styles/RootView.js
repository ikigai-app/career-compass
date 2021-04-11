import styled from "styled-components/native";
import { BACKGROUND_COLOR } from "./colors";

export const RootSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.background || BACKGROUND_COLOR};
  justify-content: center;
  align-items: center;
`;

export const RootScrollView = styled.ScrollView`
  flex-grow: 1;
  background-color: ${(props) => props.theme.background || BACKGROUND_COLOR};
`;

export const RootView = styled.View`
  flex: 1;
  background-color: ${(props) =>
    props.theme.rootBackground || BACKGROUND_COLOR};
`;

export const Container = styled.View`
  flex: 1;
  display: flex;
`;
