// src/screens/EditarStyle.tsx
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    justifyContent: 'flex-start',
    backgroundColor: '#6E96F9',
  },
  input: {
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
    color: 'black',
    fontSize: 18,
    borderRadius: 4,
  },
  botao: {
    marginTop: 15,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 35,
    backgroundColor: '#5271FF',
    borderRadius: 4,
    elevation: 3,
  },
  textoBotao: {
    fontSize: 18,
    color: 'white',
  },
});
