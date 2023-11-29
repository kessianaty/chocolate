import React from 'react';
import { Text, SafeAreaView, StyleSheet, Dimensions, FlatList } from 'react-native';
 
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Top 15 Melhores Chocolates
      </Text>
      <FlatList
        data={arrayDados}
        renderItem={({ item }) => (
          <SafeAreaView style={styles.containerchocolate}>
            <Text style={styles.texto}>{item.chocolate}</Text>
          </SafeAreaView>
        )}
      />
    </SafeAreaView>
  );
}
 
const largura = Dimensions.get('screen').width;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#45020b',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 32,
    fontWeight: '900',
    textAlign: 'center',
    color:'#fff',
  },
  texto: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    backgroundColor: '#ff4d76',
    borderRadius: 10,
    padding: 10,
    color:'#fff',
    fontWeight:900,
  },
  containerchocolate: {
    marginVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#cd182c',
    borderRadius: 10,
  },
});
 
const arrayDados = [
  { chocolate: 'Nestle' },
  { chocolate: 'Baton' },
  { chocolate: 'Lacta' },
  { chocolate: 'Talento' },
  { chocolate: 'Arcor' },
  { chocolate: 'Sulflair' },
  { chocolate: 'Bis' },
  { chocolate: 'Hersheys' },
  { chocolate: 'Ferrero Rocher' },
  { chocolate: 'Milka' },
  { chocolate: 'M&M' },
  { chocolate: 'Snickers' },
  { chocolate: 'Garoto' },
  { chocolate: 'Rafaello' },
  { chocolate: 'Lindor' },
];