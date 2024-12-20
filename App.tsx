import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './src/routes/stack.routes';
import { fetchPessoas } from './src/api/apiService';

export default function App() {
  useEffect(() => {
    const initializeApp = async () => {
      try {
        const pessoas = await fetchPessoas(); // Tenta buscar pessoas para testar a conexão
        if (pessoas) {
          console.log('Aplicativo inicializado com sucesso! Conexão com a API estabelecida.', pessoas);
        } else {
          console.error('Nenhuma pessoa encontrada ou erro na API.');
        }
      } catch (error) {
        console.error('Erro ao inicializar o aplicativo:', error);
      }
    };

    initializeApp();
  }, []);

  return (
    <NavigationContainer>
      <StackRoutes />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
