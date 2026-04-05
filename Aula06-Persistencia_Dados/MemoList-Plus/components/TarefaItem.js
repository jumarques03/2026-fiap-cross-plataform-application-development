import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';

export default function TarefaItem(props) {
  const {tarefa, onRemover, onAlterar} = props
  return (
    <View style={styles.container}>
      <Text style={[styles.texto, tarefa.concluida && styles.textoConcluido]}>{tarefa.texto}</Text>

      <Switch 
        value={tarefa.concluida}
        onValueChange={() => onAlterar(tarefa.id)}
      />

      <TouchableOpacity onPress={() => onRemover(tarefa.id)}>
        <Text style={styles.remover}>❌</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    marginVertical: 4,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  texto: { fontSize: 16, color: "#000000"},
  remover: { fontSize: 18 },
  textoConcluido: {textDecorationLine: 'line-through', color: "#413c3c"}
});