import React, { useState } from "react";
import { Text, View, Image, Platform } from "react-native";
import {
  RootView,
  PersonCardContainer,
  RightSection,
  NameContainer,
  DescriptionContainer,
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

const PersonCard = () => {
  const [name, setName] = useState("Person One");
  const [editName, setEditName] = useState(false);

  const [description, setDescription] = useState(
    "Sample Description ........."
  );
  const [editDescription, setEditDescription] = useState(false);

  const onChangeName = (text) => {
    setName(text);
  };

  const onChangeDescription = (text) => {
    setDescription(text);
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
    </RootView>
  );
};

export default ConnectPersonCard;
