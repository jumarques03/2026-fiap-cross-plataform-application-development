import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
export default function App() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState('Toque para começar!');
  useEffect(() => {
    if (count === 0) setMsg('Toque para começar!')
    if (count === 5) setMsg('🔥 Você é incrível!');
    if (count === 10) setMsg('🚀 Nível pro desbloqueado!');
    if (count === 20) setMsg('WOW! Incrível!')
  }, [count]);
  return (
    <View style={styles.container}>
      <Text style={styles.msg}>{msg}</Text>
      <Text style={styles.counter}>{count}</Text>
      <TouchableOpacity style={styles.btn} onPress={() => setCount(count + 1)}>
        <Text style={styles.btnText}>TAP!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => setCount(0)}>
        <Text style={styles.btnText}>RESET</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0f0f0f' },
  msg:       { color: '#aaa', fontSize: 16, marginBottom: 12 },
  counter:   { color: '#fff', fontSize: 72, fontWeight: 'bold' },
  btn:       { marginTop: 24, backgroundColor: '#6c63ff', paddingHorizontal: 40, paddingVertical: 16, borderRadius: 50 },
  btnText:   { color: '#fff', fontSize: 20, fontWeight: 'bold' },
});

