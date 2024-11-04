import React, { useState } from 'react';
import { 
  View, 
  TextInput, 
  Alert, 
  TouchableOpacity, 
  Text 
} from 'react-native';
import { createPessoa, Pessoa } from '../../api/apiService';
import { styles } from './Tele_CadastroStyle';

export function TelaCadastro() {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [uf, setUf] = useState('');
  const [cidade, setCidade] = useState('');

  const handleCadastro = async () => {
    if (!nome || !dataNascimento || !uf || !cidade) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    const pessoa: Pessoa = {
      id: 0, // Set a default ID; assuming it will be managed by the API
      nome, 
      dataNascimento, 
      uf, 
      cidade 
    };

    try {
      const response = await createPessoa(pessoa);
      console.log(response);
      Alert.alert('Cadastro', 'Cadastro realizado com sucesso!');
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Erro ao realizar cadastro.');
    }
  };

  return (
    <View style={styles.container}>
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
      <TouchableOpacity 
        style={styles.botao} 
        onPress={handleCadastro}
      >
        <Text style={styles.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
