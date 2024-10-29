import React, { useState, useEffect } from 'react';
import { View, TextInput, Alert, TouchableOpacity, Text } from 'react-native';
import { fetchPessoaById, updatePessoa } from '../../api/apiService';
import { styles } from './EditarStyle';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';

type EditarProps = StackScreenProps<RootStackParamList, 'Editar Cadastro'>;

export function Editar({ route, navigation }: EditarProps) {
  const [id, setID] = useState('');
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [uf, setUf] = useState('');
  const [cidade, setCidade] = useState('');

  useEffect(() => {
    const loadPessoa = async () => {
      const pessoaId = route.params.id;

      if (pessoaId) {
        const pessoa = await fetchPessoaById(pessoaId);
        if (pessoa) {
          setID(pessoa.id.toString());
          setNome(pessoa.nome);
          setDataNascimento(pessoa.dataNascimento);
          setUf(pessoa.uf);
          setCidade(pessoa.cidade);
        } else {
          Alert.alert('Erro', 'Pessoa não encontrada.');
        }
      } else {
        Alert.alert('Erro', 'ID da pessoa não fornecido.');
      }
    };

    loadPessoa();
  }, [route.params.id]);

  const handleEdit = async () => {
    const idNumber = Number(id);
    
    if (!nome || !dataNascimento || !uf || !cidade) {
      Alert.alert('Erro', 'Todos os campos devem ser preenchidos.');
      return;
    }

    const pessoaData = {
      id: idNumber,
      nome,
      dataNascimento,
      uf,
      cidade,
    };

    try {
      await updatePessoa(idNumber, pessoaData);
      Alert.alert('Sucesso', 'Cadastro atualizado com sucesso!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Erro ao atualizar o cadastro. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="ID"
        value={id}
        onChangeText={setID}
        editable={false}
      />
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
      <TouchableOpacity style={styles.botao} onPress={handleEdit}>
        <Text style={styles.textoBotao}>Editar</Text>
      </TouchableOpacity>
    </View>
  );
}
