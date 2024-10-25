// src/navigation/types.ts
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  'Tela Inicial': undefined; 
  'Tela Cadastro': undefined;
  'Editar Cadastro': undefined;
  'Tela Buscar': undefined; // Adiciona a tela de buscar
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;
