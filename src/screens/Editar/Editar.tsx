import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../navigation/types'; // Ajuste o caminho se necessário
import { BotaoEditar } from '../../components/Botoes/BotaoEditar'; // Ajuste o caminho se necessário
import IcoPessoa from '../../../assets/image/icoPessoa.png';
import { styles } from './EditarStyle';

export function Editar() {
  const navigation = useNavigation<NavigationProps>(); // Chamando useNavigation dentro de um componente

  const navToBuscar = () => {
    navigation.navigate('Tela Buscar'); // Navegar para a Tela de Buscar
  };

  return (
    <View style={styles.container}>
      <Image source={IcoPessoa} style={styles.image} />
      <TextInput 
        style={styles.titulo} 
        keyboardType='numeric' 
        placeholder="ID" 
      />
      <TouchableOpacity onPress={navToBuscar}>
        <BotaoEditar />
      </TouchableOpacity>
    </View>
  );
}
