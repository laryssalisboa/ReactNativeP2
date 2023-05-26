import { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Experiencia extends Component {
  render() {
    return(
      <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.nome}>
              Laryssa Damaceno Lisboa
            </Text>
            <Text style={styles.infoTitle}> Redatora Web </Text>
          <Text style={styles.informations}> Atuei como estagiária em Redação Web. </Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2
  },
  box: {
    margin: 15,
    shadowColor: '#000',
    backgroundColor: '#FFF',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3
  },
  nome: {
    fontSize: 17,
    fontStyle: 'italic',
    color: '#5086c1',
    alignSelf: 'center',
    marginTop: 5
  },
  infoTitle: {
    color: '#000',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 19,
    textAlign: 'left'
  },
  informations: {
    color: '#000',
    fontSize: 14,
    marginLeft: 19,
    marginBottom: 6,
    textAlign: 'left'
  },
});

export default Experiencia;