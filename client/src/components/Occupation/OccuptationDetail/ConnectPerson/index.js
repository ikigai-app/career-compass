import React, { useState, useEffect } from "react";
import * as Linking from "expo-linking";
import {
  Text,
  View,
  Image,
  Platform,
  FlatList,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { gql, useMutation } from "@apollo/client";
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
  InputContainer,
} from "../../../../styles/Occupation/ConnectPerson";
import Header from "../../../common/Header";
import Input from "../../../common/TextInput";
import {
  CheckIcon,
  DeleteIcon,
  EditIcon,
  PlusCircleIcon,
  PlusCircleAddIcon,
} from "./IconButton";

const UPDATE_CONNECT_PEOPLE = gql`
  mutation updateConnectPeople($id: ID!, $input: UpdateConnectPeople!) {
    updateConnectPeople(id: $id, input: $input) {
      name
    }
  }
`;

const ADD_SOCIAL_MEDIA = gql`
  mutation addSocialMedia($input: SocialMediaInput!) {
    addSocialMedia(input: $input) {
      id
      type
      url
    }
  }
`;

const ADD_CONNECT_PEOPLE = gql`
  mutation addConnectPeople($input: ConnectPeopleInput!) {
    addConnectPeople(input: $input) {
      id
      name
      description
    }
  }
`;

const LinkUrl = (props) => {
  return (
    <LinkBtnContainer
      onPress={() => {
        Platform.OS === "web"
          ? window.open(props.url, "_blank")
          : Linking.openURL(props.url);
      }}
    >
      <LinkUrlText>{props.name}</LinkUrlText>
    </LinkBtnContainer>
  );
};

const PersonCard = ({ item, refetch }) => {
  const [name, setName] = useState(item.name);
  const [editName, setEditName] = useState(false);

  const [description, setDescription] = useState(item.description);
  const [editDescription, setEditDescription] = useState(false);
  const [socialMedia, setSocialMedia] = useState(item.socialMedia);

  const [socialInputVisible, setSocialInputVisible] = useState(false);

  const [socialName, setSocialName] = useState("");
  const [socialUrl, setSocialUrl] = useState("");
  const [updateConnectPeople] = useMutation(UPDATE_CONNECT_PEOPLE);

  useEffect(() => {
    if (item) {
      const { socialMedia } = item;
      setSocialMedia(socialMedia);
    }
  }, [item]);

  const [addSocialMedia] = useMutation(ADD_SOCIAL_MEDIA, {
    onCompleted({ addSocialMedia }) {
      if (addSocialMedia) {
        refetch();
      }
    },
  });

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

  const updateName = async () => {
    await updateConnectPeople({
      variables: {
        id: item.id.toString(),
        input: {
          name: name,
        },
      },
    });
    setEditName(false);
  };

  const updateDescription = async () => {
    await updateConnectPeople({
      variables: {
        id: item.id.toString(),
        input: {
          description: description,
        },
      },
    });
    setEditDescription(false);
  };

  const addSocialAccounts = async () => {
    await addSocialMedia({
      variables: {
        input: {
          url: socialUrl,
          type: socialName,
          accountHolder: {
            id: item.id.toString(),
          },
        },
      },
    });
    setSocialInputVisible(false);
  };

  return (
    <PersonCardContainer>
      <View style={{ position: "absolute", right: 5, bottom: 10 }}>
        <DeleteIcon />
      </View>
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
              marginRight: 5,
            }}
            onChangeText={onChangeName}
            editable={editName}
            value={name}
          />
          {editName ? (
            <CheckIcon onPress={() => updateName()} />
          ) : (
            <EditIcon onPress={() => setEditName(true)} />
          )}
        </NameContainer>
        <DescriptionContainer>
          <Input
            placeholder={"Name"}
            style={{
              flex: 1,
              marginRight: 5,
              textAlignVertical: "top",
              fontSize: 15,
              borderWidth: editDescription ? 1 : 0,
              color: "dimgray",

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
            <CheckIcon onPress={() => updateDescription()} />
          ) : (
            <EditIcon onPress={() => setEditDescription(true)} />
          )}
        </DescriptionContainer>
        <IconContainer>
          <IconContainerChild>
            {socialMedia.map((social) => (
              <LinkUrl
                name={social.type}
                url={social.url}
                key={social.id.toString()}
              />
            ))}
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
              <CheckIcon onPress={() => addSocialAccounts()} />
            </View>
          </View>
        ) : (
          <View />
        )}
      </RightSection>
    </PersonCardContainer>
  );
};

const ConnectInput = (props) => (
  <Input
    placeholder={props.placeholder}
    style={{
      fontSize: 14,
      borderWidth: 1,
      color: "dimgray",
      fontWeight: "500",
      padding: 5,
      paddingLeft: 10,
      marginBottom: 10,
    }}
    onChangeText={props.onChangeText}
    value={props.value}
  />
);

const InputComponent = ({ setVisibleInput, parentId, refetch }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [socialName, setSocialName] = useState("");
  const [socialUrl, setSocialUrl] = useState("");

  const [addConnectPeople] = useMutation(ADD_CONNECT_PEOPLE, {
    onCompleted({ addConnectPeople }) {
      if (addConnectPeople) {
        refetch();
      }
    },
  });

  const addNewPerson = async () => {
    await addConnectPeople({
      variables: {
        input: {
          name: name,
          description: description,
          socialMedia: {
            url: socialUrl,
            type: socialName,
          },
          occupationType: {
            id: parentId.toString(),
          },
        },
      },
    });

    setVisibleInput(false);
  };

  return (
    <InputContainer>
      <ConnectInput
        placeholder={"Name"}
        onChangeText={(txt) => setName(txt)}
        value={name}
      />
      <ConnectInput
        placeholder={"Description"}
        value={description}
        onChangeText={(txt) => setDescription(txt)}
      />
      <ConnectInput
        placeholder={"Social Media Name"}
        value={socialName}
        onChangeText={(txt) => setSocialName(txt)}
      />
      <ConnectInput
        placeholder={"Social Media Url"}
        value={socialUrl}
        onChangeText={(txt) => setSocialUrl(txt)}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "grey",
          width: 80,
          height: 40,
          borderRadius: 4,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          addNewPerson();
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: "white",
            // fontWeight: 600
          }}
        >
          ADD
        </Text>
      </TouchableOpacity>
    </InputContainer>
  );
};

const ConnectPersonCard = ({ data, refetch }) => {
  const { getOccupation } = data;
  const [visibleInput, setVisibleInput] = useState(false);
  const [peopleData, setPeopleData] = useState(
    data.getOccupation.connectPeople
  );
  const renderItem = ({ item }) => <PersonCard item={item} refetch={refetch} />;

  useEffect(() => {
    if (data) {
      const { connectPeople } = data.getOccupation;
      setPeopleData(connectPeople);
    }
  }, [data]);

  if (!peopleData) {
    return <View />;
  }

  return (
    <RootView>
      <Header text={"CONNECT WITH PEOPLE"} />
      <View
        style={{
          marginTop: 20,
          // maxHeight: 500,
        }}
      />

      <FlatList
        style={{ marginBottom: 20 }}
        data={peopleData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        extraData={peopleData}
      />

      {visibleInput ? (
        <InputComponent
          setVisibleInput={setVisibleInput}
          parentId={getOccupation.id}
          refetch={refetch}
        />
      ) : (
        <PlusCircleAddIcon onPress={() => setVisibleInput(true)} />
      )}
    </RootView>
  );
};

export default ConnectPersonCard;
