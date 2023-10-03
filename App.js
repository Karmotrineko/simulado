import { StyleSheet, Text, View } from 'react-native';
import Caixa from "../jogo/src/components/Caixa"
import Carta1 from './src/components/Carta1';
import Botao from './src/components/Botao';

export default function App() {
  return (
    <Caixa>
      <Carta1 texto="Cajado foda" />
      <Botao texto="Fazer troca" />
    </Caixa>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
