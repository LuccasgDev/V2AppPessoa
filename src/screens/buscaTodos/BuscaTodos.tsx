import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  TextInput, 
  ActivityIndicator 
} from 'react-native';
import styles from './BuscaTodosStyle';
import { fetchPessoas } from '../../api/apiService';
import { Pessoa } from '../../api/apiService';

export function ListaPessoas() {
  const [pessoas, setPessoas] = useState<Pessoa[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [busca, setBusca] = useState('');

  useEffect(() => {
    const loadPessoas = async () => {
      try {
        const data = await fetchPessoas();
        if (data !== undefined) {
          setPessoas(data);
        } else {
          console.error('Erro ao buscar pessoas.');
        }
      } catch (error) {
        console.error(error);
      } finally {
        setCarregando(false);
      }
    };
    loadPessoas();
  }, []);

  const pessoasFiltradas = pessoas.filter(pessoa => 
    pessoa.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {carregando ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <>
          <TextInput 
            style={styles.input} 
            placeholder="Buscar por nome" 
            value={busca} 
            onChangeText={setBusca} 
          />
          {pessoasFiltradas.length === 0 ? (
            <Text>Nenhuma pessoa encontrada.</Text>
          ) : (
            <FlatList 
              data={pessoasFiltradas} 
              keyExtractor={(item: Pessoa) => item.id.toString()}
              renderItem={({ item }: { item: Pessoa }) => (
                <View style={styles.item}>
                  <Text style={styles.nome}>ID: {item.id}</Text>
                  <Text style={styles.nome}>NOME: {item.nome}</Text>
                  <Text style={styles.nome}>Data de Nascimento: {item.dataNascimento}</Text>
                  <Text style={styles.nome}>UF: {item.uf}</Text>
                  <Text style={styles.nome}>CIDADE: {item.cidade}</Text>
                </View>
              )} 
            />
          )}
        </>
      )}
    </View>
  );
}
