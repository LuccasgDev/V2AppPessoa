// src/screens/Editar.tsx
import React, { useState } from 'react';
import { View, TextInput, ScrollView, Alert, TouchableOpacity, Text } from 'react-native';
import { updatePessoa } from '../../api/apiService';
import { styles } from './EditarStyle';

export function Editar() {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');

  const handleEdit = async () => {
    try {
      await updatePessoa(id, { nome });
      Alert.alert('Sucesso', 'Pessoa editada com sucesso!');
    } catch (error) {
      Alert.alert('Erro', 'Erro ao editar pessoa.');
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
      <TextInput 
        style={styles.input} 
        placeholder="Novo Nome" 
        value={nome} 
        onChangeText={setNome} 
      />
      <TouchableOpacity style={styles.botao} onPress={handleEdit}>
        <Text style={styles.textoBotao}>Editar</Text>
      </TouchableOpacity>
    </View>
  );
}
