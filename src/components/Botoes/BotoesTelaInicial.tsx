// src/components/BotoesTelaInicial.tsx
import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { styles } from './BotesTelaInicialStyle';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../navigation/types';

export function Botoes() {
  const navigation = useNavigation<NavigationProps>(); // Use o tipo

  function navToCadastro() {
    navigation.navigate('Tela Cadastro'); // Certifique-se de que o nome da tela está correto
  }

  function navToEditar(){
    navigation.navigate('Editar Cadastro')
  }

  function navToDeletar(){
    navigation.navigate('Tela Deletar')
  }

  function navToListaPessoas(){
    navigation.navigate('Tela ListarTodos')

  }

  return (
    <View>
      <Pressable onPress={navToCadastro} style={styles.butao_Cadastra}>
        <Text style={{ color: "black", fontSize: 20 }}> Cadastra Pessoa </Text>
      </Pressable>
      <Pressable onPress={navToEditar} style={styles.butao_Editar}>
        <Text style={{ color: "black", fontSize: 20 }}> Editar Pessoa </Text>
      </Pressable>
      <Pressable onPress={navToDeletar} style={styles.butao_Deletar}>
        <Text style={{ color: "black", fontSize: 20 }}> Deletar Pessoa </Text>
      </Pressable>
      <Pressable onPress={navToListaPessoas} style={styles.butao_Buscar}>
        <Text style={{ color: "black", fontSize: 20 }}> Buscar todas as Pessoas </Text>
      </Pressable>
    </View>
  );
}
