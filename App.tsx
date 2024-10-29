import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './src/routes/stack.routes';
import { fetchPessoas } from './src/api/apiService';

export default function App() {
  useEffect(() => {
    const initializeApp = async () => {
      try {
        await fetchPessoas(); // Tenta buscar pessoas para testar a conexão
        console.log('Aplicativo inicializado com sucesso! Conexão com a API estabelecida.');
      } catch (error) {
        console.error('Erro ao inicializar o aplicativo:', error);
      }
    };

    initializeApp();
  }, []);

  return (
    <NavigationContainer>
      <StackRoutes /> {/* Mantém as rotas */}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
