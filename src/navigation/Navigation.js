import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home';
import Favorites from '../screens/Favorites';

const Navigation = createStackNavigator({
  HomeScreen,
  Favorites
}, {
  initialRouteName: 'HomeScreen',
});

export default Navigation;