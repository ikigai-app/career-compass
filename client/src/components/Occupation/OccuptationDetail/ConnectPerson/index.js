import React, { useState } from "react";
import * as Linking from "expo-linking";
import { Text, View, Image, Platform } from "react-native";
import {
  RootView,
  PersonCardContainer,
  RightSection,
  NameContainer,
  DescriptionContainer,
  IconContainer,
  LinkBtnContainer,
  LinkUrlText,
  IconContainerChild,
  SocialMediaContainer,
} from "../../../../styles/Occupation/ConnectPerson";
import Header from "../../../common/Header";
import IconButton from "../../../common/IconsButton";
import Input from "../../../common/TextInput";

const CheckIcon = (props) => (
  <IconButton
    iconType={"Ionicons"}
    icon="checkmark-circle"
    width={22}
    height={22}
    size={22}
    color={"green"}
    onPress={props.onPress}
  />
);

const EditIcon = (props) => (
  <IconButton
    iconType={"FontAwesome5"}
    icon="pen"
    width={15}
    height={15}
    size={15}
    color={"gray"}
    onPress={props.onPress}
  />
);

const PlusCircleIcon = (props) => (
  <IconButton
    iconType={"FontAwesome5"}
    icon="plus-circle"
    width={22}
    height={22}
    size={22}
    color={"gray"}
    onPress={props.onPress}
  />
);

const PlusSquareIcon = (props) => (
  <IconButton
    iconType={"FontAwesome5"}
    icon="plus-square"
    width={30}
    height={30}
    size={30}
    color={"gray"}
    onPress={props.onPress}
  />
);

const LinkUrl = (props) => {
  return (
    <LinkBtnContainer
      onPress={() => {
        Linking.openURL("https://expo.io");
      }}
    >
      <LinkUrlText>{props.name}</LinkUrlText>
    </LinkBtnContainer>
  );
};

const PersonCard = () => {
  const [name, setName] = useState("Person One");
  const [editName, setEditName] = useState(false);

  const [description, setDescription] = useState(
    "Sample Description ........."
  );
  const [editDescription, setEditDescription] = useState(false);

  const [socialInputVisible, setSocialInputVisible] = useState(false);

  const [socialName, setSocialName] = useState("");
  const [socialUrl, setSocialUrl] = useState("");

  const onChangeName = (text) => {
    setName(text);
  };

  const onChangeDescription = (text) => {
    setDescription(text);
  };

  const onChangeSocialName = (text) => {
    setSocialName(text);
  };
  const onChangeSocialUrl = (text) => {
    setSocialUrl(text);
  };

  return (
    <PersonCardContainer>
      <View>
        <Image
          style={{
            width: Platform.OS === "web" ? 65 : 55,
            height: Platform.OS === "web" ? 65 : 55,
            borderRadius: Platform.OS === "web" ? 65 / 2 : 55 / 2,
            borderColor: "grey",
            borderWidth: Platform.OS === "web" ? 4 : 3,
          }}
          source={require("../../../../../assets/profile.png")}
        />
      </View>

      <RightSection>
        <NameContainer>
          <Input
            placeholder={"Name"}
            style={{
              fontSize: 16,
              borderWidth: editName ? 1 : 0,
              color: "darkred",
              fontWeight: "bold",
              textTransform: "uppercase",
              padding: 4,
            }}
            onChangeText={onChangeName}
            editable={editName}
            value={name}
          />
          {editName ? (
            <CheckIcon onPress={() => setEditName(false)} />
          ) : (
            <EditIcon onPress={() => setEditName(true)} />
          )}
        </NameContainer>
        <DescriptionContainer>
          <Input
            placeholder={"Name"}
            style={{
              flex: 1,
              textAlignVertical: "top",
              fontSize: 15,
              borderWidth: editDescription ? 1 : 0,
              color: "dimgray",
              fontWeight: "600",
              padding: 4,
              marginTop: 2,
              maxHeight: 65,
            }}
            multiline={true}
            numberOfLines={2}
            onChangeText={onChangeDescription}
            editable={editDescription}
            value={description}
          />
          {editDescription ? (
            <CheckIcon onPress={() => setEditDescription(false)} />
          ) : (
            <EditIcon onPress={() => setEditDescription(true)} />
          )}
        </DescriptionContainer>
        <IconContainer>
          <IconContainerChild>
            <LinkUrl name={"Linkedin"} />
            <LinkUrl name={"Medium"} />
            <LinkUrl name={"GitHub"} />
            <LinkUrl name={"Twitter"} />
          </IconContainerChild>
          {socialInputVisible ? (
            <View />
          ) : (
            <PlusCircleIcon onPress={() => setSocialInputVisible(true)} />
          )}
        </IconContainer>
        {socialInputVisible ? (
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <SocialMediaContainer>
              <Input
                placeholder={"Social Media Name"}
                style={{
                  fontSize: 14,
                  borderWidth: 1,
                  color: "dimgray",
                  fontWeight: "500",
                  padding: 2,
                  paddingLeft: 10,
                }}
                onChangeText={onChangeSocialName}
                value={socialName}
              />
              <Input
                placeholder={"Social Media URL"}
                style={{
                  marginTop: 5,
                  fontSize: 14,
                  borderWidth: 1,
                  color: "dimgray",
                  fontWeight: "500",
                  padding: 2,
                  paddingLeft: 10,
                }}
                onChangeText={onChangeSocialUrl}
                value={socialUrl}
              />
            </SocialMediaContainer>
            <View>
              <CheckIcon onPress={() => setSocialInputVisible(false)} />
            </View>
          </View>
        ) : (
          <View />
        )}
      </RightSection>
    </PersonCardContainer>
  );
};

const ConnectPersonCard = () => {
  return (
    <RootView>
      <Header text={"CONNECT WITH PEOPLE"} />
      <View style={{ marginTop: 20 }} />
      <PersonCard />
      <PersonCard />

      <PlusSquareIcon />
    </RootView>
  );
};

export default ConnectPersonCard;
