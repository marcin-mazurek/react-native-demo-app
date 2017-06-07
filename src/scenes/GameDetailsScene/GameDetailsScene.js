import React, { Component } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';

const styles = {
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  image: { width: 300, height: 300, marginBottom: 10 },
  description: { color: '#333', marginBottom: 15 },
  button: { borderColor: '#9ce000', borderWidth: 1, borderRadius: 5, padding: 10, alignItems: 'center' },
  buttonText: { color: '#9ce000', fontWeight: 'bold' }
};

export default class GameDetailsScene extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  })

  render() {
    const game = this.props.navigation.state.params;

    return (
      <ScrollView style={styles.container}>
        <Image source={{ uri: game.cover }} style={styles.image} />
        <Text style={styles.description}>{game.description}</Text>
        <TouchableOpacity onPress={() => null}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Play Now</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
};