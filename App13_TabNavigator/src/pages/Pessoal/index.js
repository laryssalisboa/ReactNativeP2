import { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Linking,
  StyleSheet,
} from 'react-native';

class Pessoal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.box}>
            <Text style={styles.nome}>Laryssa Damaceno Lisboa</Text>
            <Image
              style={styles.img}
              source={{
                uri: 'https://avatars.githubusercontent.com/u/100734683?v=4',
              }}
            />
            <Text style={styles.infoTitle}> Idade: </Text>
            <Text style={styles.informations}> 21 anos </Text>
            <Text style={styles.infoTitle}> Nascimento: </Text>
            <Text style={styles.informations}> 22/04/2002 </Text>
            <Text style={styles.infoTitle}> Rede Sociais: </Text>
            <Text
              style={styles.linkedin}
              onPress={() =>
                Linking.openURL(
                  'https://www.linkedin.com/in/laryssa-lisboa-431836209/'
                )
              }>
              LinkedIn
            </Text>
            <Text
              style={styles.linkedin}
              onPress={() =>
                Linking.openURL('https://github.com/laryssalisboa')
              }>
              GitHub
            </Text>
            <Text style={styles.infoTitle}> Contato: </Text>
            <Text style={styles.informations}>
              {' '}
              laryssa.lisboa@fatec.sp.gov.br{' '}
            </Text>
          </View>
  
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
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
  img: {
    margin: 7,
    alignSelf: 'center',
    width: 190,
    height: 220,
    resizeMode: 'contain'
  },
  infoTitle: {
    color: '#000',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 19,
    textAlign: 'left',
  },
  informations: {
    color: '#000',
    fontSize: 14,
    marginLeft: 19,
    marginBottom: 6,
    textAlign: 'left',
  },
  linkedin: {
    color: '#2196f3',
    textDecorationLine: 'underline',
    fontSize: 14,
    marginLeft: 25,
    marginBottom: 6,
    textAlign: 'left'
  }
});

export default Pessoal;
