import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
export default function Sobre() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CC - 2026</Text>
      <View style={styles.tecnologias}>
          <Image style={styles.imagens} source={{uri: "https://www.okoone.com/wp-content/uploads/2024/06/React-native-2-logo.png"}}/>
          <Image style={styles.imagens} source={{uri: "https://play-lh.googleusercontent.com/dWGgMuaN9WwN3Ihha4QMzOI4RtpfrpMhP0jSeqDm5DKnFcv74HvA33Rna4tTKZ8Ifk2E"}}/>
          <Image style={styles.imagens} source={{uri: "https://stickersdevs.com.br/wp-content/uploads/2022/01/nodejs-logo-adesivo-sticker.png"}}/>
      </View>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.voltar}>← Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container:  { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff'},
  titulo:     { fontSize: 28, fontWeight: 'bold', marginBottom: 30, borderWidth: 4, borderRadius: 8, padding: 10, color: '#084da8', borderColor: '#084da8'},
  tecnologias: {flexDirection: 'row', justifyContent: 'space-between', padding: 5},
  voltar:     { fontSize: 16, color: '#084da8', fontWeight: '600' },
  imagens: { width: 150, height: 150, marginBottom: 30}
});