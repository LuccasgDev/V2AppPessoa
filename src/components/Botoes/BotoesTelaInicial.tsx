import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { styles } from './BotesTelaInicialStyle';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../navigation/types';

export function Botoes() {
  const navigation = useNavigation<NavigationProps>();

  function navToCadastro() {
    navigation.navigate('Tela Cadastro');
  }

  function navToBuscar() {
    navigation.navigate('Tela Buscar'); // Certifique-se que não está passando parâmetros
  }

  function navToDeletar() {
    navigation.navigate('Tela Deletar');
  }

  function navToListaPessoas() {
    navigation.navigate('Tela Listar Todos');
  }

  return (
    <View>
      <Pressable onPress={navToCadastro} style={styles.butao_Cadastra}>
        <Text style={{ color: "black", fontSize: 20 }}> Cadastrar Pessoa </Text>
      </Pressable>
      <Pressable onPress={navToBuscar} style={styles.butao_Editar}>
        <Text style={{ color: "black", fontSize: 20 }}> Buscar Pessoa </Text>
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
