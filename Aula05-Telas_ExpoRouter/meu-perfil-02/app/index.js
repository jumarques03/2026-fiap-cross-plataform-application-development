import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useRouter } from 'expo-router';
export default function Home() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Júlia Souza Marques</Text>
      <View style={styles.viewEstilizada}>
        <Text style={styles.fotoPerfil}>JM</Text>
      </View>
      <TouchableOpacity style={styles.botao} onPress={() => router.push('/perfil')}>
        <Text style={styles.botaoTexto}>Ver meu perfil</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5'},
  nome:    { fontSize: 35, fontWeight: 'bold', marginBottom: 24},
  viewEstilizada: {backgroundColor: '#4587d2', color: '#fff', marginBottom: 30, borderRadius: 50, padding: 20, borderWidth: 4},
  fotoPerfil: {fontSize: 30},
  botao:     { backgroundColor: '#244ad4', padding: 16, borderRadius: 12},
  botaoTexto:{ color: '#fff', fontSize: 20, fontWeight: '600' },
});