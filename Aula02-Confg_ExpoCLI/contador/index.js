import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
export default function App() {
  const [contador, setContador] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Primeiro App! 😁</Text>
      
      <View style={styles.contadorContainer}>
        <Text style={styles.numero}>{contador}</Text>
      </View>
      <View style={styles.botoes}>
        <TouchableOpacity 
          style={styles.botao}
          onPress={() => setContador(contador + 1)}
        >
          <Text style={styles.textoBotao}>➕ Aumentar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.botao, styles.botaoZerar]}
          onPress={() => setContador(0)}
        >
          <Text style={styles.textoBotao}>🔄 Zerar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.botao}
          onPress={() => setContador(contador - 1)}
        >
          <Text style={styles.textoBotao}>➖ Diminuir</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.botao}
          onPress={() => setContador(contador * 2)}
        >
          <Text style={styles.textoBotao}>✖️ Multiplicar por 2</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#130a27',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },
  contadorContainer: {
    backgroundColor: '#1E2749',
    borderRadius: 20,
    padding: 40,
    marginBottom: 40,
    minWidth: 200,
    alignItems: 'center',
  },
  numero: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#aea1e7',
  },
  botoes: {
    gap: 15,
    width: '100%',
  },
  botao: {
    backgroundColor: '#6144e0',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  botaoZerar: {
    backgroundColor: '#aea1e7',
  },
  textoBotao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f9f9fa',
  },
});