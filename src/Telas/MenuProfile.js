import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Modal, Button, StyleSheet } from "react-native";

const UserProfile = () => {
  const [userData, setUserData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    age: 30,
    registrationDate: "01/01/2023",
  });

  const [editing, setEditing] = useState(false);

  const [editData, setEditData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleEdit = () => {
    setEditData(userData);
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
    setUserData({ ...editData });
    // axios.put usuarios
  };

  const handleDeactivateAccount = () => {
    setShowModal(true);
  };

  const confirmDeactivateAccount = () => {
    //todo
    //axios.delete
    setShowModal(false);
    //redirect p/home
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/user.png")}
        style={styles.avatar}
      />
      {editing ? (
        <View style={styles.editFields}>
          <TextInput
            value={editData.firstName}
            onChangeText={(text) => setEditData({ ...editData, firstName: text })}
          />
          <TextInput
            value={editData.lastName}
            onChangeText={(text) => setEditData({ ...editData, lastName: text })}
          />
          <TextInput
            value={editData.email}
            onChangeText={(text) => setEditData({ ...editData, email: text })}
          />
          <TextInput
            value={editData.age.toString()}
            onChangeText={(text) => setEditData({ ...editData, age: text })}
          />
        </View>
      ) : (
        <View style={styles.userInfo}>
          <Text>Name: {userData.firstName} {userData.lastName}</Text>
          <Text>Email: {userData.email}</Text>
          <Text>Age: {userData.age}</Text>
          <Text>Registration Date: {userData.registrationDate}</Text>
        </View>
      )}
      {editing ? (
        <Button title="Salvar" onPress={handleSave} />
      ) : (
        <Button title="Editar" onPress={handleEdit} />
      )}
      <TouchableOpacity
        style={styles.deactivateButton}
        onPress={handleDeactivateAccount}
      >
        <Text style={styles.buttonText}>Desativar minha conta</Text>
      </TouchableOpacity>

      <Modal visible={showModal} animationType="slide">
        <View style={styles.modalContent}>
          <Text>Tem certeza de que deseja desativar sua conta?</Text>
          
          <Button title="Sim, desativar" onPress={confirmDeactivateAccount}/>
          
          <Button title="Cancelar" onPress={() => setShowModal(false)}/>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userInfo: {
    marginVertical: 10,
  },
  editFields: {
    marginVertical: 10,
  },
  deactivateButton: {
    backgroundColor: "red",
    padding: 8,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
  },
  modalContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap:15
  },
});

export default UserProfile;
