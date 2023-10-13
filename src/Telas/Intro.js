import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

import IconHome from "../../assets/IconHomeAnimation1.gif";
import Arrow from "../../assets/arrow.png";
import TypingAnimation from "../components/AnimationText"

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHome}>
        <Image style={styles.logo} source={IconHome} />
        <Text style={styles.titulo}>Seja Bem - Vindo !</Text>
        <TypingAnimation style={styles.subtitulo}
          text="Somos a Byte Wizards. Aqui está uma prévia da ferramenta utilizando
          ChatGPT"/>
        
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Cadastrar");
          }}
        >
        <Text style={styles.btnNext}>Próximo</Text>
        <Image source={Arrow}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#e5e5e5",
    overflow: "hidden",
  },
  
  containerHome:{
    flex: 8,
    alignItems:"center",
    justifyContent:"center"
  },
  
  logo: {
    marginBottom: 30,
    width: 360,
    height: 360,
  },
  titulo: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    width: 350,
    lineHeight: 25,
  },

  button:{
    backgroundColor:"#ef4023",
    borderRadius:10,
    padding:20,
    marginTop:30,
    
  },
  btnNext: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 25,
    color:"white"
  },
  containerButton:{
    flex: 2,
  },
  
});