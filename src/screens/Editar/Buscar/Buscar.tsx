import React from 'react';
import { View, Image, Text, TextInput, ScrollView, Alert, TouchableOpacity } from 'react-native';
import IcoPessoa from '../../../assets/image/icoPessoa.png';
import { styles } from './BuscarStyle';

export function TelaCadastro() {
  const handleCadastro = () => {
    Alert.alert(
      'Editar',
      'Editado com sucesso!',
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={IcoPessoa} style={styles.image} />
      <Text style={styles.titulo}> Nome </Text>
      <TextInput 
        style={styles.input} 
        placeholder="Digite seu nome"
        editable 
        multiline={false} 
        maxLength={40} 
      />
      <Text style={styles.titulo}> Data de Nascimento </Text>
      <TextInput 
        style={styles.input} 
        placeholder="DD/MM/AAAA"
        keyboardType="numeric" 
      />
      <Text style={styles.titulo}> UF </Text>
      <TextInput 
        style={styles.input} 
        placeholder="UF"
        maxLength={2} 
      />
      <Text style={styles.titulo}> Cidade </Text>
      <TextInput 
        style={styles.input} 
        placeholder="Cidade"
      />
      <TouchableOpacity style={styles.botao} onPress={handleCadastro}>
        <Text style={styles.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
