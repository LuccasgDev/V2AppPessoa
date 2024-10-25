import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './BotesTelaInicialStyle';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../navigation/types';

export function BotaoEditar() {
  const navigation = useNavigation<NavigationProps>();

  function navToEditar() {
    navigation.navigate('Tela Buscar'); // Navega para a Tela Buscar
  }

  return (
    <View>
      <TouchableOpacity style={styles.butao_Cadastra} onPress={navToEditar}>
        <Text style={styles.fonte}>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
}
