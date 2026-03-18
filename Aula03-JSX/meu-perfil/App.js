import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  const usuario = {
    nome: "Ada Lovelace",
    bio: "Primeira programadora da história 💻",
    seguidores: "2.4M",
    avatar: "https://picsum.photos/seed/ada/200",
  };
  return (
    <View style={styles.container}>
      {/* Avatar */}
      <Image
        source={{ uri: usuario.avatar }}
        style={styles.avatar}
      />
      {/* Nome */}
      <Text style={styles.nome}>{usuario.nome}</Text>
      {/* Bio */}
      <Text style={styles.bio}>{usuario.bio}</Text>
      {/* Stats */}
      <View style={styles.stats}>
        <Text style={styles.stat}>👥 {usuario.seguidores} seguidores</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a0a0a',
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#E1306C',
    marginBottom: 16,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 16,
  },
  stats: {
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  stat: {
    color: '#fff',
    fontSize: 14,
  },
});