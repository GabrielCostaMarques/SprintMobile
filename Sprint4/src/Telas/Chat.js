import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import respostaApiGPT from "../components/apiGPT";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    const newMessage = {
      id: Math.random().toString(),
      text: inputMessage,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages([...messages, newMessage]);
    setInputMessage("");
  };

  return (
    <View style={{flex:1}}>
      <View><Text>Bem vindo ao Chat de Suporte</Text></View>
      <View style={styles.container}>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.messageContainer}>
              <Text style={styles.messageText}>{respostaApiGPT}</Text>
              <Text style={styles.timestampText}>{item.timestamp}</Text>
            </View>
          )}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite sua mensagem aqui..."
            value={inputMessage}
            onChangeText={(text) => setInputMessage(text)}
          />
          <TouchableOpacity
            style={styles.sendButton}
            onPress={handleSendMessage}
          >
            <Text style={styles.sendButtonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  messageContainer: {
    backgroundColor: "#E5E5E5",
    padding: 8,
    borderRadius: 8,
    marginVertical: 4,
  },
  messageText: {
    fontSize: 16,
  },
  timestampText: {
    fontSize: 12,
    color: "gray",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  input: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
    padding: 12,
  },
  sendButton: {
    backgroundColor: "#007AFF",
    borderRadius: 20,
    padding: 12,
    marginLeft: 8,
  },
  sendButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ChatScreen;
