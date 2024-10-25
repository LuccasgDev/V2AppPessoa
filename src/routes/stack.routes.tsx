import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TelaInicial } from '../screens/TelaInicial/TelaInicial';
import { TelaCadastro } from '../screens/TelaCadastro/Tele_Cadastro';
import {Editar} from '../screens/Editar/Editar'
import {TelaBuscar} from '../screens/Editar/Buscar/Buscar'

const Stack = createStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="Tela Inicial">
      <Stack.Screen 
        name="Tela Inicial"
        component={TelaInicial}
      />
      <Stack.Screen
        name="Tela Cadastro" 
        component={TelaCadastro}
      />
      <Stack.Screen
      name="Editar Cadastro"
      component={Editar}
      />
      <Stack.Screen
      name='Tela Buscar'
      component={TelaBuscar}
      />
    </Stack.Navigator>
  );
}
