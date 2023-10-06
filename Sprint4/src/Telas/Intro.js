import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

import IconHome from "../../assets/IconHomeAnimation1.gif";
import Arrow from "../../assets/arrow.png";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHome}>
        <Image style={styles.logo} source={IconHome} />
        <Text style={styles.titulo}>Seja Bem - Vindo !</Text>
        <Text style={styles.subtitulo}>
          Somos a Byte Wizards. Aqui está uma prévia da ferramenta utilizando
          ChatGPT
        </Text>
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Cadastrar");
          }}
        >
          <Image style={styles.arrow} source={Arrow} />
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
    backgroundColor: "#fff",
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
  arrow: {
    width: 50,
    height: 50,
    position:'relative',
    left:130,
    top:50
  },
  containerButton:{
    flex: 2,
  },
  
});
