import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

import IconHome from "../../assets/Home.png";
import Arrow from "../../assets/arrow.png";
import TypingAnimation from "../components/AnimationText"

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={IconHome} />
      <Text style={styles.titulo}>Seja Bem - Vindo !</Text>
      <TypingAnimation text="Somos a Byte Wizards. Aqui está uma prévia da ferramenta utilizando ChatGPT"/>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {navigation.navigate('Cadastrar')}}>
        <Image style={styles.arrow} source={Arrow} />
      </TouchableOpacity>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ef4023',
    overflow:"hidden"
  },
  logo: {
    marginBottom: 50,
    width: 260,
    height: 260,
    opacity: 0.7,
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    width: 350,
    lineHeight: 25,
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 25,
    borderRadius: 30,
    position: 'absolute',
    top: 650,
  },
  arrow: {
    width: 50,
    height: 50,
  }
});
