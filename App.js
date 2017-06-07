import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import GameListScene from './src/scenes/GameListScene/GameListScene';
import GameDetailsScene from './src/scenes/GameDetailsScene/GameDetailsScene';

export default StackNavigator({
  Home: { screen: GameListScene },
  Details: { screen: GameDetailsScene }
});