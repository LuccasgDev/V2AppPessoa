import React from 'react';
import { View, Pressable, Text,TouchableOpacity } from 'react-native';
import { styles } from './BotesTelaInicialStyle';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../navigation/types';

export function BotaoEditar(){
    return(
        <View>
        <TouchableOpacity style={styles.butao_Cadastra} onPress={() => console.log("ID Nao Localizado")}>
        <Text style={styles.fonte}>Buscar</Text>
      </TouchableOpacity>
    </View>
    )
}