import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Contexto } from "../components/contexto";
import { useContext, useState } from "react";
import { api, API_URL } from "../api";
import { onSucess, onError } from "../components/Toast";

const Lista = () => {
  const contexto = useContext(Contexto);
  return (
    <View style={style.body}>
      <Text style={style.titleInput}>Lista de Cadastros</Text>

      <View key={index}>
        <Text style={style.titleInput}>Nome: {usuario.nome}</Text>
        <Text style={style.titleInput}>Email: {usuario.email}</Text>
        <Text style={style.titleInput}>Senha: {usuario.senha}</Text>
        <TouchableOpacity onPress={contexto.remover}>
          <View style={style.btnLogin}>
            <Text style={style.btnText}>Excluir Conta</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SignIn = ({ navigation }) => {
  const contexto = useContext(Contexto);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const obj = {
    nome: nome,
    email: email,
    senha: senha,
  };

  const cadastrarUsuario = (obj) => {
    api
      .post(`${API_URL}usuarios/cadastrar`, obj)
      .then((response) => {
        onSucess(`Cadastro realizado com sucesso!`);
        contexto.id = response.data
        setTimeout(() => {
          navigation.navigate("Login");  
        }, 1000);
        // navigation.navigate("Login");
      })
      .catch((error) => {
        if (typeof error.response.data == "object") {
          let objErrors = error.response.data;
          let msgErroTratada = objErrors.errors.map(
            (msg) => msg.defaultMessage
          )[0];
          onError(msgErroTratada);
        } else {
          onError(error.response.data);
        }
      });
  };

  return (
    <View style={style.body}>
      <Text style={style.btnText}>Cadastre-se agora mesmo!</Text>

      <TextInput
        style={style.input}
        placeholder="Digite seu Nome"
        value={nome}
        onChangeText={setNome}
        minLength={1}
      />
      <TextInput
        style={style.input}
        placeholder="Digite seu Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Digite sua Senha"
        style={style.input}
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity
        value="Cadastrar"
        onPress={() => {
          const obj = { nome, email, senha };
          cadastrarUsuario(obj);
        }}
      >
        <View style={style.btnCadastrar}>
          <Text style={style.btnText}>Cadastre-se</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={{ marginVertical: 20 }}
      >
        <View style={style.btnCadastrar}>
          <Text style={style.btnText}>Já Tenho Conta</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

//Estilização
const style = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ef4023",
    padding: 20,
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 5,
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 20,
    color: "black",
  },

  titleInput: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 2,
    color: "#fff",
    marginTop: 20,
  },

  btnCadastrar: {
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
