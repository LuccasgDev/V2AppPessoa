import React, { useState } from 'react';
import { View, TextInput, Alert, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { fetchPessoaById } from '../../../api/apiService';
import { styles } from './BuscarStyle';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/types';

type BuscarProps = StackScreenProps<RootStackParamList, 'Tela Buscar'>;

export function Buscar({ navigation }: BuscarProps) {
  const [id, setId] = useState('');
  const [loading, setLoading] = useState(false); // Adicionando estado de loading

  const handleBuscar = async () => {
    const idNumber = Number(id);
    if (isNaN(idNumber)) {
      Alert.alert('Erro', 'ID deve ser um número válido.');
      return;
    }

    setLoading(true); // Inicia o loading

    try {
      const pessoa = await fetchPessoaById(idNumber);
      if (pessoa) {
        navigation.navigate('Editar Cadastro', { id: pessoa.id });
        setId(''); // Limpa o campo de input após a busca
      } else {
        Alert.alert('Erro', 'Pessoa não encontrada.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro ao buscar pessoa. Verifique sua conexão e tente novamente.');
    } finally {
      setLoading(false); // Finaliza o loading
    }
  };

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder="ID" 
        value={id} 
        onChangeText={setId} 
        keyboardType="numeric" // Define o teclado para número
      />
      <TouchableOpacity style={styles.botao} onPress={handleBuscar} disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#fff" /> // Mostra um indicador de carregamento
        ) : (
          <Text style={styles.textoBotao}>Buscar</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
