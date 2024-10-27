// src/screens/Tele_Cadastro.tsx
import React, { useState } from 'react';
import { View, TextInput, ScrollView, Alert, TouchableOpacity, Text } from 'react-native';
import { createPessoa } from '../../api/apiService';
import { styles } from './Tele_CadastroStyle';


export function TelaCadastro() {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [uf, setUf] = useState('');
  const [cidade, setCidade] = useState('');

  const handleCadastro = async () => {
    const data = { nome, dataNascimento, uf, cidade };
    try {
      await createPessoa(data);
      Alert.alert('Cadastro', 'Cadastro realizado com sucesso!');
    } catch (error) {
      Alert.alert('Erro', 'Erro ao realizar cadastro.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder="Nome" 
        value={nome} 
        onChangeText={setNome} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Data de Nascimento" 
        value={dataNascimento} 
        onChangeText={setDataNascimento} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="UF" 
        value={uf} 
        onChangeText={setUf} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Cidade" 
        value={cidade} 
        onChangeText={setCidade} 
      />
      <TouchableOpacity style={styles.botao} onPress={handleCadastro}>
        <Text style={styles.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
