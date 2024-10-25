import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import IcoPessoa from '../../../assets/image/icoPessoa.png';
import { styles } from './DeletarStyle';

export function Deletar() {
  const handleDeletar = () => {
    Alert.alert(
      'Deletar',
      'Deletado com sucesso!'
    );
  };

  return (
    <View style={styles.container}>
      <Image source={IcoPessoa} style={styles.image} />
      <TextInput 
        style={styles.input} 
        keyboardType='numeric' 
        placeholder="ID" 
      />
      <TouchableOpacity onPress={handleDeletar}>
        <Text style={styles.botao}>Deletar</Text>
      </TouchableOpacity>
    </View>
  );
}
