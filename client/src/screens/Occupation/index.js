import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Platform,
  TouchableOpacity,
  Modal as ModalMobile,
  Dimensions,
} from "react-native";
import Button from "../../components/common/Button";
import CircularButton from "../../components/common/Button/CircularButton";
import Card from "../../components/Occupation/Card/RootCard";
import SearchBar from "../../components/SearchBar";
import {
  RootView,
  FlatListContainer,
  SearchBarContainer,
  SearchButtonContainer,
  CircularButtonContainer,
} from "../../styles/Occupation/RootScreen";
import { useQuery, gql, useMutation } from "@apollo/client";
import Loader from "../../components/common/Loader";
import Modal from "modal-react-native-web";
import Input from "../../components/common/TextInput";

const windowWidth = Dimensions.get("window").width;

const GET_OCCUPATION = gql`
  query {
    occupations {
      _id
      name
      description
    }
  }
`;

const ADD_OCCUPATION = gql`
  mutation addOccupation($input: AddOccupationInput!) {
    addOccupation(input: $input) {
      _id
      name
    }
  }
`;

const DELETE_OCCUPATION = gql`
  mutation deleteOccupation($id: ID!) {
    deleteOccupation(id: $id)
  }
`;

export default function OccupationScreen({ route, navigation }) {
  const { loading, error, data, refetch } = useQuery(GET_OCCUPATION, {
    fetchPolicy: "no-cache",
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const [deleteOccupation] = useMutation(DELETE_OCCUPATION, {
    onCompleted({}) {
      refetch();
    },
  });

  const [addOccupation] = useMutation(ADD_OCCUPATION, {
    onCompleted({ addOccupation }) {
      if (addOccupation) {
        refetch();
      }
    },
  });

  if (loading) {
    return <Loader />;
  }

  if (error) return <Text>Error :(</Text>;

  const createOccupation = async () => {
    await addOccupation({
      variables: {
        input: {
          name: name,
          description: description,
        },
      },
    });
    setModalVisible(false);
  };

  const deleteOcc = async (id) => {
    await deleteOccupation({
      variables: {
        id: id,
      },
    });
  };

  const renderCard = ({ item }) => (
    <Card
      title={item.name}
      onPress={() => {
        navigation.navigate("OccupationDetails", {
          id: item._id,
        });
      }}
      onDelete={() => {
        deleteOcc(item._id);
      }}
    />
  );

  const onRefresh = () => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  };

  return (
    <RootView>
      {Platform.OS === "web" ? (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onDismiss={() => {
            // alert("Modal has been closed.");
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(100, 100, 100, 0.1)",
            }}
          >
            <View
              style={{
                backgroundColor: "#fff",
                height: 320,
                width: 480,
                flexDirection: "column",
                paddingHorizontal: 30,
                paddingTop: 70,
              }}
            >
              <Input
                placeholder={"Name"}
                style={{
                  fontSize: 16,
                  lineHeight: 32,
                  borderWidth: 1,
                  color: "black",
                  fontWeight: "bold",
                  padding: 4,
                }}
                onChangeText={(text) => setName(text)}
                value={name}
              />
              <Input
                placeholder={"Description"}
                style={{
                  marginTop: 20,
                  fontSize: 16,
                  lineHeight: 32,
                  borderWidth: 1,
                  color: "black",
                  fontWeight: "bold",
                  padding: 4,
                }}
                onChangeText={(text) => setDescription(text)}
                value={description}
              />

              <View
                style={{
                  flexDirection: "row",
                  marginTop: 50,
                  justifyContent: "space-around",
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "crimson",
                    padding: 10,
                    borderRadius: 4,
                    width: 100,
                  }}
                  onPress={() => setModalVisible(false)}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 16,
                      fontWeight: 600,
                      textAlign: "center",
                    }}
                  >
                    CANCEL
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    backgroundColor: "green",
                    padding: 10,
                    borderRadius: 4,
                    width: 100,
                  }}
                  onPress={() => createOccupation()}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 16,
                      fontWeight: 600,
                      textAlign: "center",
                    }}
                  >
                    ADD
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      ) : (
        <ModalMobile
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            // Alert.alert("Modal has been closed.");
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(100, 100, 100, 0.5)",
            }}
          >
            <View
              style={{
                backgroundColor: "#fff",
                height: 320,
                width: windowWidth - 20,
                flexDirection: "column",
                paddingHorizontal: 20,
                paddingTop: 70,
              }}
            >
              <Input
                placeholder={"Name"}
                style={{
                  fontSize: 16,
                  lineHeight: 32,
                  borderWidth: 1,
                  color: "black",
                  fontWeight: "bold",
                  padding: 4,
                }}
                onChangeText={(text) => setName(text)}
                value={name}
              />
              <Input
                placeholder={"Description"}
                style={{
                  marginTop: 20,
                  fontSize: 16,
                  lineHeight: 32,
                  borderWidth: 1,
                  color: "black",
                  fontWeight: "bold",
                  padding: 4,
                }}
                onChangeText={(text) => setDescription(text)}
                value={description}
              />

              <View
                style={{
                  flexDirection: "row",
                  marginTop: 50,
                  justifyContent: "space-around",
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "crimson",
                    padding: 10,
                    borderRadius: 4,
                    width: 100,
                  }}
                  onPress={() => setModalVisible(false)}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 16,
                      fontWeight: "700",
                      textAlign: "center",
                    }}
                  >
                    CANCEL
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    backgroundColor: "green",
                    padding: 10,
                    borderRadius: 4,
                    width: 100,
                  }}
                  onPress={() => createOccupation()}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 16,
                      fontWeight: "700",
                      textAlign: "center",
                    }}
                  >
                    ADD
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ModalMobile>
      )}

      <SearchBarContainer>
        <SearchBar />
        {Platform.OS == "web" ? (
          <SearchButtonContainer>
            <Button text="CREATE" onPress={() => setModalVisible(true)} />
          </SearchButtonContainer>
        ) : (
          <View />
        )}
      </SearchBarContainer>
      <FlatListContainer>
        <FlatList
          data={data.occupations}
          renderItem={renderCard}
          numColumns={Platform.OS === "web" ? 3 : 0}
          //   horizontal={Platform.OS === "web" ? false : false}
          keyExtractor={(item) => item._id}
          ItemSeparatorComponent={() => (
            <View style={{ marginBottom: Platform.OS === "web" ? 40 : 10 }} />
          )}
          refreshing={refreshing}
          onRefresh={() => {
            onRefresh();
          }}
        />
      </FlatListContainer>
      {Platform.OS == "web" ? (
        <View />
      ) : (
        <CircularButtonContainer>
          <CircularButton onPress={() => setModalVisible(true)} />
        </CircularButtonContainer>
      )}
    </RootView>
  );
}
