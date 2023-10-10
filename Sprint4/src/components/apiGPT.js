import OpenAI from "openai";
import axios from "axios";
import { View, Text } from "react-native";
import Chat from "../Telas/Chat";

const API_KEY = "";

const respostaApiGPT = () => {
  const apiChat = axios.create({
    baseURL: "https://api.openai.com/v1/chat/completions",
  });

  apiChat.post({
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + API_KEY,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        prompt: "oque é o GPT?",
        max_tokens: 2048,
        temperature: 0.5,
      }),
    })

    .then((reponse) => {
      let resposta = reponse.choices[0].message.content;
        alert(resposta)

    })

    .catch((err)=>{
        alert("Falha na comunicação"+err)
    })
};

export default respostaApiGPT;
