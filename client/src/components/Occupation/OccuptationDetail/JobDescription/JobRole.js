import React, { useState, useEffect } from "react";
import { View, Text, TextInput, FlatList, Platform } from "react-native";
import { gql, useMutation, useQuery } from "@apollo/client";
import {
  RootFlatListContainer,
  FlatListHeader,
  FlatListHeaderText,
  InputContainer,
} from "../../../../styles/Occupation/JobDescription";
import Input from "../../../common/TextInput";
import {
  CheckIcon,
  EditIcon,
  PlusCircleIcon,
  DeleteIcon,
} from "./common/IconButton";
import { Bullet } from "./common/Bullet";

const ADD_ROLE = gql`
  mutation addJobDescription($id: ID!, $input: JobDescriptionInput!) {
    addJobDescription(id: $id, input: $input) {
      _id
      roles {
        _id
        role
      }
    }
  }
`;

const UPDATE_ROLE = gql`
  mutation updateJobDescription(
    $jobDescriptionID: ID!
    $input: UpdateJobDescriptionInput!
  ) {
    updateJobDescription(jobDescriptionID: $jobDescriptionID, input: $input) {
      _id
      roles {
        _id
        role
      }
    }
  }
`;

const DELETE_ROLE = gql`
  mutation deleteJobDescription(
    $jobDescriptionID: ID!
    $input: UpdateJobDescriptionInput!
  ) {
    deleteJobDescription(jobDescriptionID: $jobDescriptionID, input: $input)
  }
`;

const InputComponent = ({ data, id, refetch }) => {
  const [selectedID, setSelectedID] = useState("");
  const [editText, setEditText] = useState(false);
  const [text, setText] = useState(data.role);

  const [updateJobDescription] = useMutation(UPDATE_ROLE, {
    onCompleted({ updateJobDescription }) {
      if (updateJobDescription) {
        refetch();
        setSelectedID("");
        setEditText(false);
      }
    },
  });

  const [deleteJobDescription] = useMutation(DELETE_ROLE, {
    onCompleted() {
      refetch();
      setSelectedID("");
      setEditText(false);
    },
  });

  const deleteRole = async () => {
    await deleteJobDescription({
      variables: {
        jobDescriptionID: id,
        input: {
          type: "roles",
          id: selectedID,
        },
      },
    });
  };

  const updateRole = async () => {
    await updateJobDescription({
      variables: {
        jobDescriptionID: id,
        input: {
          type: "roles",
          value: text,
          id: selectedID,
        },
      },
    });
  };

  return (
    <InputContainer>
      <Bullet />
      <Input
        placeholder={"Name"}
        style={{
          flex: 1,
          fontSize: 15,
          borderWidth: editText && selectedID === data._id ? 1 : 0,
          color: "dimgray",
          padding: 10,
          maxHeight: 65,
          marginRight: 5,
        }}
        onChangeText={(text) => {
          setText(text);
        }}
        editable={editText}
        value={text}
      />
      {editText && selectedID === data._id ? (
        <View style={{ flexDirection: "row" }}>
          <CheckIcon
            onPress={() => {
              updateRole();
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <DeleteIcon onPress={() => deleteRole()} />
          </View>
        </View>
      ) : (
        <EditIcon
          onPress={() => {
            setEditText(true);
            setSelectedID(data._id);
          }}
        />
      )}
    </InputContainer>
  );
};

const NewInputComponent = (props) => {
  const [role, setRole] = useState("");

  const [addJobDescription] = useMutation(ADD_ROLE, {
    onCompleted({ addJobDescription }) {
      if (addJobDescription) {
        props.refetch();
      }
    },
  });

  const addRole = async () => {
    await addJobDescription({
      variables: {
        id: props.id,
        input: {
          type: "roles",
          value: role,
        },
      },
    });

    props.hideInput();
  };

  return (
    <InputContainer>
      <TextInput
        placeholder={"Role"}
        style={{
          flex: 1,
          fontSize: 15,
          borderWidth: 1,
          color: "dimgray",
          fontWeight: "600",
          padding: 10,
          marginTop: 2,
          marginRight: 10,
        }}
        onChangeText={(text) => setRole(text)}
        value={role}
      />
      <CheckIcon onPress={addRole} />
    </InputContainer>
  );
};

const JobRole = ({ data, refetch }) => {
  const { _id, roles } = data;
  const [visibleInput, setVisibleInput] = useState(true);

  const renderItem = ({ item }) => (
    <InputComponent data={item} id={_id} refetch={refetch} />
  );

  return (
    <RootFlatListContainer>
      <FlatListHeader>
        <FlatListHeaderText>ROLES</FlatListHeaderText>
      </FlatListHeader>
      <FlatList
        data={roles}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        extraData={roles}
      />

      {visibleInput ? (
        <View
          style={{ marginLeft: Platform.OS === "web" ? 0 : 1, marginTop: 7 }}
        >
          <PlusCircleIcon onPress={() => setVisibleInput(false)} />
        </View>
      ) : (
        <NewInputComponent
          id={_id}
          hideInput={() => setVisibleInput(true)}
          refetch={refetch}
        />
      )}
    </RootFlatListContainer>
  );
};

export default JobRole;
