import { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TarefaItem from './components/TarefaItem';

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState('');

  // 📖 Carregar ao abrir o app
  useEffect(() => {
    carregarTarefas();
    console.log("O app carregou!")
  }, []);

  const carregarTarefas = async () => {
    const dados = await AsyncStorage.getItem('tarefas');
    if (dados) setTarefas(JSON.parse(dados));
  };

  const salvarTarefas = async (lista) => {
    await AsyncStorage.setItem('tarefas', JSON.stringify(lista));
  };

  const adicionarTarefa = () => {
    if (!texto.trim()) return;
    const nova = { id: Date.now().toString(), texto, concluida: false};
    const novaLista = [...tarefas, nova];
    setTarefas(novaLista);
    salvarTarefas(novaLista);
    setTexto('');
  };

  const removerTarefa = (id) => {
    const novaLista = tarefas.filter((t) => t.id !== id);
    setTarefas(novaLista);
    salvarTarefas(novaLista);
  };

  const alterarConcluida = (id) => {
    const novaLista = tarefas.map(item => item.id === id ? {...item, concluida: !item.concluida} : item);
    setTarefas(novaLista);
    salvarTarefas(novaLista);
  };

  const limparTudo = async () => {
    setTarefas([]); 
    await AsyncStorage.removeItem('tarefas'); 
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={texto}
        onChangeText={setTexto}
        placeholder="Nova tarefa..."
        style={styles.input}
      />
      <Button title="Adicionar ➕" onPress={adicionarTarefa} />

      <Button title="Limpar Tudo 🗑️" color="red" onPress={limparTudo} />

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TarefaItem tarefa={item} onRemover={removerTarefa} onAlterar={alterarConcluida} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 40, paddingTop: 60 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
           padding: 10, marginBottom: 10, fontSize: 16 },
});