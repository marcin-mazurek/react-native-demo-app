import React, { Component } from 'react';
import { ActivityIndicator, View, ScrollView } from 'react-native';
import GameList from './components/GameList';
import GameDetailsScene from '../GameDetailsScene/GameDetailsScene';
import fetchGamesData from '../../data/fetchGamesData';

const styles = {
  emptyContainer: { flex: 1, justifyContent: 'center' },
  container: { backgroundColor: '#fff' }
};

export default class GameListScene extends Component {
   static navigationOptions = {
     title: 'Vegas'
   }

   constructor() {
    super();
    this.state = {
      games: null
    };

    fetchGamesData()
      .then(games => this.setState({ games }))
      .catch(console.error);
  }

  handleGameSelection(gameKey) {
    const game = this.state.games.find(game => game.key === gameKey);
    this.props.navigation.navigate('Details', game);
  }

  render() {
    if (this.state.games === null) {
      return (
        <View style={styles.emptyContainer}>
          <ActivityIndicator size="large" />
        </View>
      );
    } else {
      return (
        <ScrollView style={styles.container}>
          <GameList games={this.state.games} onPress={game => this.handleGameSelection(game)} />
        </ScrollView>
      );
    }
  }
};
