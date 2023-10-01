import React, { useContext, useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  StyleSheet,
} from "react-native";

import { Contexto } from "../components/contexto";
import { api, API_URL } from "../api";
import { Toaster, toast } from "react-hot-toast";

const Login = ({ navigation }) => {
  const contexto = useContext(Contexto);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    try {
      const response = await api.post(`${API_URL}usuarios/login`, {
        email,
        senha,
      });

      if (response.status === 200) {
        contexto.salvar(response.data);
        navigation.navigate("Menu");
      } else {
        toast.error("Credenciais inválidas");
      }
    } catch (error) {
      toast.error("Falha no login. Verifique suas credenciais.");
    }
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Login</Text>
      <View>
        <Text style={style.titleInput}>EMAIL</Text>
        <TextInput
          style={style.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Digite seu E-mail"
        />

        <Text style={style.titleInput}>PASSWORD</Text>
        <TextInput
          style={style.input}
          onChangeText={setSenha}
          value={senha}
          secureTextEntry={true}
          placeholder="Digite sua senha"
          minLength={1}
        />
      </View>

      <View>
        <TouchableOpacity
          onPress={() => {
            handleLogin();
            // contexto.salvar
            // navigation.navigate('Menu')
          }}
        >
          <View style={style.btnLogin}>
            <Text style={style.btnText}>Logar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ef4023",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },

  titleInput: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 2,
    color: "#fff",
    marginTop: 20,
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 5,
    width: 300,
    paddingVertical: 20,
    paddingHorizontal: 20,
    color: "black",
  },

  btnLogin: {
    fontSize: 30,
    backgroundColor: "#ef4023",
    position: "relative",
    top: 60,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 2,
  },
  btnText: {
    fontSize: 30,
    color: "white",
  },
});
