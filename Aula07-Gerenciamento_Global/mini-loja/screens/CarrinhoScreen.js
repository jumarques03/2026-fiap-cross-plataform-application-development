import { View, Text, FlatList, Button, StyleSheet} from 'react-native';
import { useCarrinho } from '../context/CarrinhoContext';
export default function ProdutosScreen() {
  const { carrinho } = useCarrinho(); // mesma coisa que: const { carrinho } = useContext(CarrinhoContext);
  const calcularTotal = (itens) => {
    return itens.reduce((total, produto) => total + produto.preco, 0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.itensCarrinho}>🛍 Itens no carrinho: {carrinho.length}</Text>
      <FlatList
        data={carrinho}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
          </View>
        )}
      />
      <Text style={styles.total}>💵 Total a pagar: R${calcularTotal(carrinho).toFixed(2)}</Text>

      <Button title='Pagar'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20},
  itensCarrinho: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  card: { backgroundColor: '#e5e5e5', padding: 15, marginVertical: 8, borderRadius: 10 },
  nome: { fontSize: 18, fontWeight: '600' },
  total: {fontSize: 18, fontWeight: 'bold', marginBottom: 30},
  preco: {fontSize: 16}
});