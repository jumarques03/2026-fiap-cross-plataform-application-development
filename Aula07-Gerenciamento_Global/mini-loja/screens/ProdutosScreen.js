import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { produtos } from '../data/produtos';
import { useCarrinho } from '../context/CarrinhoContext';
export default function ProdutosScreen() {
  const { adicionar, carrinho } = useCarrinho(); // mesma coisa que: const { adicionar, carrinho } = useContext(CarrinhoContext);
  return (
    <View style={styles.container}>
      <Text style={styles.itensCarrinho}>🛒 Itens no carrinho: {carrinho.length}</Text>
      <FlatList
        data={produtos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
            <Button title="Adicionar ao Carrinho" onPress={() => adicionar(item)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20},
  itensCarrinho: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  card: { backgroundColor: '#e5e5e5', padding: 15, marginVertical: 8, borderRadius: 10 },
  nome: { fontSize: 18, fontWeight: '600' },
  preco: {fontSize: 16}
});