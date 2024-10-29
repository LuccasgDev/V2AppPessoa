import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  'Tela Inicial': undefined;
  'Tela Cadastro': undefined;
  'Editar Cadastro': { id: number }; // Isso está correto
  'Tela Buscar': undefined; // Se não precisar de 'id'
  'Tela Deletar': undefined;
  'Tela Listar Todos': undefined;
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;
