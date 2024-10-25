import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, TextInput } from 'react-native';
import styles from './BuscaTodosStyle'; // Certifique-se de que o caminho está correto

const pessoas = [
  {
    id: '1',
    nome: 'Lucas Gabriel',
    dataNascimento: '22/06/2003',
    uf: 'CE',
    cidade: 'Fortaleza',
  },
  {
    id: '2',
    nome: 'Luis Felipe',
    dataNascimento: '01/09/2010',
    uf: 'CE',
    cidade: 'Iguatu',
  },
];

export function ListaPessoas() {
  // Definindo o estado 'filtro' como string ou null
  const [filtro, setFiltro] = useState<string | null>(null);
  const [busca, setBusca] = useState('');

  const filtrarPorFortaleza = () => {
    setFiltro('Fortaleza');
  };

  const limparFiltro = () => {
    setFiltro(null);
    setBusca('');
  };

  const pessoasFiltradas = pessoas.filter(pessoa => {
    const matchCidade = filtro ? pessoa.cidade === filtro : true;
    const matchNome = pessoa.nome.toLowerCase().includes(busca.toLowerCase());
    return matchCidade && matchNome;
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar por nome"
        value={busca}
        onChangeText={setBusca}
      />
      <Button title="Filtrar por Fortaleza" onPress={filtrarPorFortaleza} />
      <Button title="Limpar Filtro" onPress={limparFiltro} />
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
