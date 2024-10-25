import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Permite que o conteúdo role quando necessário
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#6E96F9',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
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
