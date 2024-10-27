// src/screens/BuscaTodos.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput } from 'react-native';
import styles from './BuscaTodosStyle';
import { fetchPessoas } from '../../api/apiService';
import { Pessoa } from '../../models/Pessoa'; // Ajuste o caminho conforme necessário

export function ListaPessoas() {
  const [pessoas, setPessoas] = useState<Pessoa[]>([]); // Define o tipo do estado
  const [filtro, setFiltro] = useState('');
  const [busca, setBusca] = useState('');

  useEffect(() => {
    const loadPessoas = async () => {
      try {
        const data = await fetchPessoas();
        setPessoas(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadPessoas();
  }, []);

  const pessoasFiltradas = pessoas.filter(pessoa => 
    pessoa.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar por nome"
        value={busca}
        onChangeText={setBusca}
      />
      <FlatList
        data={pessoasFiltradas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nome}>ID: {item.id}</Text>
            <Text style={styles.nome}>NOME: {item.nome}</Text>
            <Text style={styles.nome}>Data de Nascimento: {item.dataNascimento}</Text>
            <Text style={styles.nome}>UF: {item.uf}</Text>
            <Text style={styles.nome}>CIDADE: {item.cidade}</Text>
          </View>
        )}
      />
    </View>
  );
}
