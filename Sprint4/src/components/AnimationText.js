import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

const TypingAnimation = ({ text }) => {
  const [typedText, setTypedText] = useState('');
  const cursorAnimationRef = React.createRef();

  useEffect(() => {
    typeText();
  }, []);

  const typeText = async () => {
    const textToType = text.split('');
    const interval = 100; // Ajuste a velocidade da digitação aqui

    for (let i = 0; i < textToType.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, interval));
      setTypedText((prevText) => prevText + textToType[i]);
    }

    // Inicie a animação do cursor após a digitação completa
    cursorAnimationRef.current?.pulse(800);
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <Animatable.View 
      animation="fadeInLeft">
        
        <Text style={{ fontSize: 24, whiteSpace: 'nowrap', overflow: 'hidden' }}>{typedText}</Text>

        <Animatable.View 
        ref={cursorAnimationRef} 
        animation="flash" 
        easing="ease-out" 
        iterationCount="infinite" 
        style={{ position: 'absolute', top: 0, left: 0 }}>

          <Text style={{ display: 'inline-block', width: 10, height: 24, backgroundColor: '#000' }} />
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};

export default TypingAnimation;
