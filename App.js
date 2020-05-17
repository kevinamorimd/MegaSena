import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: []
    }
  }

  gerarNumeros() {
    let n = [];

    for (var i = 1; i <= 6; i++) {
      n.push(Math.floor(Math.random() * 60) + "," + "  ");
    }

    this.numerosRepetidos(n);
  }

  numerosRepetidos(array) {
    for (var b = 1; b < array.length; b++) {
      let exists = array.indexOf(array[b], b + 1)
      if (exists != -1 || array[b] == 0) {
        array[b] = Math.floor(Math.random() * 60) + "," + "  ";
      }
    }

    this.setState({
      numero: array
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Gerar numeros Aleatórios"
          color="#6A5ACD"
          onPress={() => { this.gerarNumeros() }}
        />
        <Text style={styles.text}>Resultado:</Text>
        <Text style={styles.result}>{this.state.numero}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
  },
  result: {
    color: '#fff',
    fontSize: 24
  },
  text: {
    color: '#fff',
    fontSize: 24
  }
});