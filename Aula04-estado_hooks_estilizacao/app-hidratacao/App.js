import { View, StyleSheet, Text, TouchableOpacity} from "react-native";
import { useState, useEffect } from "react";

export default function HidratacaoApp() {
  const [copos, setCopos] = useState(0);
  const [msg, setMSG] = useState("Comece a beber água para atingir sua meta!")
  const [displayCopo, setDisplayCopo] = useState("")
  const [backgroundColor, setBackgroundColor] = useState('#ffffff')
  useEffect(() => {
    if (copos >= 8) {
      setMSG("🏆 Meta do dia atingida!")
      setBackgroundColor('#c1fcd4')
    } else{
      setMSG("Comece a beber água para atingir sua meta!")
      setBackgroundColor('#ffffff')
    }
  }, [copos]);
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <Text style={styles.msg}>{msg}</Text>
      <Text style={styles.contagemCopos}>Você bebeu: {copos} copos</Text>
      <Text style={styles.textoDisplayCopos}>{displayCopo}</Text>
      <TouchableOpacity style={styles.botoes} onPress={() => {setCopos(copos + 1); setDisplayCopo(displayCopo + "🥤")}}>
        <Text style={styles.textoBotoes}>Adicionar 🥤</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botoes} onPress={() => {setCopos(0); setDisplayCopo("")}}>
        <Text style={styles.textoBotoes}>Resetar 🥤</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: { flex: 1, alignItems: 'center'},
  msg: { color: '#000000', fontSize: 26, marginTop: 200, marginBottom:100, textAlign: 'center', padding: 10},
  contagemCopos: {color: '#000000', fontSize: 30, marginBottom: 60, paddingVertical: 8, paddingHorizontal: 8, backgroundColor:'#8fe5ff', borderRadius: 6, borderWidth: 4, borderColor:'#000000', textAlign: 'center',},
  textoDisplayCopos: {paddingHorizontal: 50, marginBottom: 40, fontSize: 16},
  texto: {color: '#000000', fontSize: 16, marginBottom: 12 },
  textoBotoes: {color: '#ffffff', fontSize: 24, marginBottom: 12, paddingVertical: 10,  paddingHorizontal: 10,},
  botoes: {color: '#ffffff', fontSize: 30, marginBottom: 50, backgroundColor: '#038ea0', borderRadius: 50}
});