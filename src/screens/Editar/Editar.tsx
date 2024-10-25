import React from 'react';
import { View, Image, Text, TextInput } from 'react-native';
import {BotaoEditar} from '../../components/Botoes/BotaoEditar';
import IcoPessoa from '../../../assets/image/icoPessoa.png';

import { styles } from './EditarStyle';

export function Editar() {
  return (
    <View style={styles.container}>
        <Image source={IcoPessoa} style={styles.image}/>
        <TextInput style={styles.titulo} keyboardType='numeric' placeholder="ID"/>
        <BotaoEditar/>

    </View>
  );
}