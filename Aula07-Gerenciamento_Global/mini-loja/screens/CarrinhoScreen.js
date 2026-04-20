import { View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import { useCarrinho } from '../context/CarrinhoContext';
import { Ionicons } from '@expo/vector-icons';

export default function ProdutosScreen() {
  const { carrinho, removerProduto, adicionarProduto, deletarProduto} = useCarrinho(); // mesma coisa que: const { carrinho } = useContext(CarrinhoContext);

  const calcularTotal = (itens) => {
    return itens.reduce((total, produto) => total + (produto.preco * produto.quantidade), 0);
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
            <Text style={styles.infos}>R$ {item.preco.toFixed(2)}</Text>
            <View style={styles.quantidade}>
              <Text style={styles.infos}>Quantidade: {item.quantidade}</Text>
              <TouchableOpacity style={styles.botoes} onPress={() => adicionarProduto(item)}>
                <Text><Ionicons name="add" color="#ffffff" size={20}/></Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.botoes} onPress={() => removerProduto(item.id)}>
                <Text><Ionicons name="remove" color="#ffffff" size={20} /></Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.botoes} onPress={() => deletarProduto(item.id)}>
                <Text><Ionicons name="trash-outline" color="#ffffff" size={20} /></Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <Text style={styles.total}>💵 Total a pagar: R${calcularTotal(carrinho).toFixed(2)}</Text>

      <TouchableOpacity style={styles.botaoPagar}>
        <Text style={styles.textoPagar}>Pagar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20},
  itensCarrinho: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  card: { backgroundColor: '#e5e5e5', padding: 15, marginVertical: 8, borderRadius: 10 },
  quantidade: {flexDirection: "row", justifyContent: "space-between"},
  nome: { fontSize: 18, fontWeight: '600' },
  total: {fontSize: 18, fontWeight: 'bold', marginBottom: 20},
  infos: {fontSize: 16},
  botoes: { backgroundColor: '#3d48e8', padding:5, borderRadius: 10 },
  botaoPagar: { backgroundColor: '#3d48e8', padding:5, borderRadius: 10, justifyContent: 'center'},
  textoPagar: {color: "#ffffff", textAlign: 'center', fontSize: 18, fontWeight: 'bold', padding: 5}
});