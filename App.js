import React, { useState } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import axios from "axios";
import Ionicons from "@expo/vector-icons/Ionicons";

// Importe de Funções e componente
import { Contexto } from "./src/components/contexto";

// Importe de telas
import HomeScreen from "./src/Telas/Intro";
import RegisterScreen from "./src/Telas/Register";
import LoginScreen from "./src/Telas/Login";
import ChatScreen from "./src/Telas/Chat";
import Menu from "./src/Telas/MenuProfile";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const api = axios.create({
  baseURL: "https://databs-b6b35-default-rtdb.firebaseio.com",
});

const MenuScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer independent={true}>
        <Tab.Navigator>
          <Tab.Screen name="ChatBot" component={ChatScreen} 
          
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View>
                  <Ionicons
                    name="chatbox"
                    size={22}
                    color="green"
                  />
                </View>
              );
            },
          }}
          />
          <Tab.Screen
            name="Menu"
            component={Menu}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View>
                    <Ionicons
                      name="menu"
                      size={22}
                      color="darkorange"
                    />
                  </View>
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};
export default function App({ navigation }) {
  const [lista, setLista] = useState([]);
  const salvar = (obj) => {
    setLista([...lista, obj]);
  };

  const cadastrar = (obj) => {
    api
      .post("/users.json", obj)
      .then((resposta) => {
        alert("Cadastro Concluído!");
      })
      .catch((err) => {
        alert("Erro ao criar cadastro!" + err);
      });
  };

  const listar = () => {
    api
      .get("/users.json")
      .then((response) => {
        const listaNova = [];
        for (const chave in response.data) {
          const obj = response.data[chave];
          obj.id = chave;
          listaNova.push(obj);
        }
        setLista(listaNova);
      })

      .catch((err) => {
        alert("Erro ao mostrar a lista" + err);
      });
  };

  const remover = () => {
    api.delete("/users/" + obj.id + ".json");
  };
  return (
    <Contexto.Provider
      value={{
        listar,
        cadastrar,
        remover,
        salvar,
        lista,
      }}
    >
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={ChatScreen} />
            <Stack.Screen name="Cadastrar" component={RegisterScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="‎" component={MenuScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Contexto.Provider>
  );
}
