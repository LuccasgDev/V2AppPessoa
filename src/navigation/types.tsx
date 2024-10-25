// src/navigation/types.ts
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  'Tela Inicial': undefined; 
  'Tela Cadastro': undefined;
  'Editar Cadastro':undefined;
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;
