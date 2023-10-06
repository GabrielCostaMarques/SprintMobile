import React, { useState } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import axios from 'axios';

// Importe de Funções e componente
import { Contexto } from "./src/components/contexto";



// Importe de telas
import HomeScreen from "./src/Telas/Intro";
import RegisterScreen from "./src/Telas/Register";
import LoginScreen from "./src/Telas/Login";
import ChatScreen from "./src/Telas/Chat";
import Menu from "./src/Telas/MenuProfile"



const esconderTab ={headerTransparent:true, headerShown:false}
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const api = axios.create({ baseURL: "https://databs-b6b35-default-rtdb.firebaseio.com" });

const MenuScreen=()=>{
  return(
    <View style={{flex:1}}>
      <NavigationContainer independent={true}>
        <Tab.Navigator initialRouteName="Página">
          <Tab.Screen name="ChatBot" component={ChatScreen} options={esconderTab}/>
          <Tab.Screen name="Menu" component={Menu}options={esconderTab}/>
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  )
}
export default function App({navigation}) {

const [lista, setLista] = useState([]);
const salvar = (obj) => {
    setLista([...lista, obj]);
  };

  const cadastrar = (obj) => {
    api.post("/users.json",obj)
      .then((resposta) => {
        alert("Cadastro Concluído!");
      })
      .catch((err) => {
        alert("Erro ao criar cadastro!"+err);
      });
  };

  const listar = () => {
    api.get("/users.json")
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
        lista
      }}
    >
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}options={esconderTab} />
            <Stack.Screen name="Cadastrar" component={RegisterScreen}options={esconderTab} />
            <Stack.Screen name="Login" component={LoginScreen} options={esconderTab}/>
            <Stack.Screen name="Menu" component={MenuScreen} options={esconderTab}/>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Contexto.Provider>
  );
}
