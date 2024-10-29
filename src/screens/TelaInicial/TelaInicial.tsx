// TelaInicial.tsx
import React from 'react';
import { View, Image } from 'react-native';
import icoPessoa from '../../../assets/image/icoPessoa.png'; 
import { styles } from './TelaInicialStyle';
import { Botoes } from '../../components/Botoes/BotoesTelaInicial'; 

export function TelaInicial({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Image source={icoPessoa} style={styles.image} />
      <Botoes />
    </View>
  );
}
