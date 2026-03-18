import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {

  const pessoaApresentada = {
    nome: "Júlia Marques",
    URLfotoPerfil: "https://picsum.photos/seed/ada/200",
    curso: "Ciência da Computação",
    ano: "Segundo ano",
    fraseRepresentativa: "O mundo é grande, quando a alma não é pequena",
    linkGithub: "https://github.com/jumarques03",
    linkLinkedin: "https://www.linkedin.com/in/juliasouzamarques/",
  }
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: pessoaApresentada.URLfotoPerfil }}
        style={styles.IMGfotoPerfil}
      />
      <Text style={styles.nome}>{pessoaApresentada.nome}</Text>
      
      <Text style={styles.curso}>{pessoaApresentada.curso}</Text>
      
      <Text style={styles.ano}>{pessoaApresentada.ano}</Text>

      <Text style={styles.frase}>" {pessoaApresentada.fraseRepresentativa} "</Text>
      
      <TouchableOpacity style={styles.botoes}>
        <Text style={styles.links}>{pessoaApresentada.linkGithub}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botoes}>
        <Text style={styles.links}>{pessoaApresentada.linkLinkedin}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c1f75',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  IMGfotoPerfil: {
    borderRadius: 250,
    width: 150,
    height: 150,
  },
  nome:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  links: {
    fontWeight: "",
    color: '#fff',
  },
  curso: {
    fontWeight: "semibold",
    color: '#fff',
    fontSize: 16,
  },
  ano: {
    fontWeight: "semibold",
    color: '#fff',
    fontSize: 16,
  },
  frase: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#c6b5ff',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  botoes: {
    backgroundColor: '#10063c',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  }
});
