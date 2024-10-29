// src/screens/Deletar.tsx
import React, { useState } from 'react';
import { View, TextInput, ScrollView, Alert, TouchableOpacity, Text } from 'react-native';
import { deletePessoa, } from '../../api/apiService';
import { styles } from './DeletarStyle';

export function Deletar() {
  const [id, setId] = useState('');

  const handleDeletar = async () => {
    const idNumber = Number(id); // Convert the string to a number
    if (isNaN(idNumber)) {
      Alert.alert('Erro', 'ID deve ser um número válido.');
      return;
    }
  
    try {
      await deletePessoa(idNumber); // Pass the number instead of the string
      Alert.alert('Sucesso', 'Pessoa deletada com sucesso!');
    } catch (error) {
      Alert.alert('Erro', 'Erro ao deletar pessoa.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder="ID" 
        value={id} 
        onChangeText={setId} 
      />
      <TouchableOpacity style={styles.botao} onPress={handleDeletar}>
        <Text style={styles.textoBotao}>Deletar</Text>
      </TouchableOpacity>
    </View>
  );
}
