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

const ADD_REQUIREMENT = gql`
  mutation addJobDescription($id: ID!, $input: JobDescriptionInput!) {
    addJobDescription(id: $id, input: $input) {
      _id
      requirements {
        _id
        requirement
      }
    }
  }
`;

const UPDATE_REQUIREMENT = gql`
  mutation updateJobDescription(
    $jobDescriptionID: ID!
    $input: UpdateJobDescriptionInput!
  ) {
    updateJobDescription(jobDescriptionID: $jobDescriptionID, input: $input) {
      _id
      requirements {
        _id
        requirement
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
  const [text, setText] = useState(data.requirement);

  const [updateJobDescription] = useMutation(UPDATE_REQUIREMENT, {
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

  const deleteRequirement = async () => {
    await deleteJobDescription({
      variables: {
        jobDescriptionID: id,
        input: {
          type: "requirements",
          id: selectedID,
        },
      },
    });
  };

  const updateRequirement = async () => {
    await updateJobDescription({
      variables: {
        jobDescriptionID: id,
        input: {
          type: "requirements",
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
        placeholder={"Requirement"}
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
              updateRequirement();
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <DeleteIcon onPress={() => deleteRequirement()} />
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
  const [requirement, setRequirement] = useState("");

  const [addJobDescription] = useMutation(ADD_REQUIREMENT, {
    onCompleted({ addJobDescription }) {
      if (addJobDescription) {
        props.refetch();
      }
    },
  });

  const addRequirement = async () => {
    await addJobDescription({
      variables: {
        id: props.id,
        input: {
          type: "requirements",
          value: requirement,
        },
      },
    });

    props.hideInput();
  };

  return (
    <InputContainer>
      <TextInput
        placeholder={"Requirement"}
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
        onChangeText={(text) => setRequirement(text)}
        value={requirement}
      />
      <CheckIcon onPress={addRequirement} />
    </InputContainer>
  );
};

const JobRequirements = ({ data, refetch }) => {
  const { _id, requirements } = data;
  const [visibleInput, setVisibleInput] = useState(true);

  const renderItem = ({ item }) => (
    <InputComponent data={item} id={_id} refetch={refetch} />
  );

  return (
    <RootFlatListContainer>
      <FlatListHeader>
        <FlatListHeaderText>REQUIREMENTS</FlatListHeaderText>
      </FlatListHeader>
      <FlatList
        data={requirements}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        extraData={requirements}
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

export default JobRequirements;
