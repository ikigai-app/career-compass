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

const ADD_SKILL = gql`
  mutation addJobDescription($id: ID!, $input: JobDescriptionInput!) {
    addJobDescription(id: $id, input: $input) {
      _id
      skills1 {
        _id
        skill1
      }
    }
  }
`;

const UPDATE_SKILL = gql`
  mutation updateJobDescription(
    $jobDescriptionID: ID!
    $input: UpdateJobDescriptionInput!
  ) {
    updateJobDescription(jobDescriptionID: $jobDescriptionID, input: $input) {
      _id
      skills1 {
        _id
        skill1
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
  const [text, setText] = useState(data.skill1);

  const [updateJobDescription] = useMutation(UPDATE_SKILL, {
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

  const deleteSkill = async () => {
    await deleteJobDescription({
      variables: {
        jobDescriptionID: id,
        input: {
          type: "skills1",
          id: selectedID,
        },
      },
    });
  };

  const updateSkill = async () => {
    await updateJobDescription({
      variables: {
        jobDescriptionID: id,
        input: {
          type: "skills1",
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
        placeholder={"Skill"}
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
              updateSkill();
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <DeleteIcon onPress={() => deleteSkill()} />
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
  const [skill, setSkill] = useState("");

  const [addJobDescription] = useMutation(ADD_SKILL, {
    onCompleted({ addJobDescription }) {
      if (addJobDescription) {
        props.refetch();
      }
    },
  });

  const addSkill = async () => {
    await addJobDescription({
      variables: {
        id: props.id,
        input: {
          type: "skills1",
          value: skill,
        },
      },
    });

    props.hideInput();
  };

  return (
    <InputContainer>
      <TextInput
        placeholder={"Skill"}
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
        onChangeText={(text) => setSkill(text)}
        value={skill}
      />
      <CheckIcon onPress={addSkill} />
    </InputContainer>
  );
};

const JobSkills = ({ data, refetch }) => {
  const { _id, skills1 } = data;
  const [visibleInput, setVisibleInput] = useState(true);

  const renderItem = ({ item }) => (
    <InputComponent data={item} id={_id} refetch={refetch} />
  );

  return (
    <RootFlatListContainer>
      <FlatListHeader>
        <FlatListHeaderText>SKILLS</FlatListHeaderText>
      </FlatListHeader>
      <FlatList
        data={skills1}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        extraData={skills1}
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

export default JobSkills;
