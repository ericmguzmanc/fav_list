import React, { PureComponent } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import WordsList from '../components/WordsList';
import { Fonts } from '../utils/fonts';

import Icon from 'react-native-vector-icons/MaterialIcons';

class HomeScreen extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Startup Name Generator',
      headerStyle: {
        backgroundColor: '#ff5252'
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontFamily: Fonts.OpenSansBold
      },
      headerRight: (
        <Icon name="list" 
          onPress={() => navigation.navigate('Favorites')} 
          size={30} 
          color="white" 
          style={{marginRight: 15}} 
          solid />
        )
      }
  };

  goToFavorites = () => {
    console.log('here on press ');
    this.props.navigation.navigate('Favorites');
  }

  render () {
    return(
      <View>
        <StatusBar backgroundColor="#bf3d3d" barStyle="light-content" />
        <WordsList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 12,
    paddingRight: 12,
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#ff5252',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  homeTitle: {
    flex: 1,
    alignItems: 'flex-start'
    
  },
  homeBarButton: {
    flex: 1,
    alignItems: 'flex-end'

  },
  homeItem: {
    flex: 1,
    borderWidth: 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 15,
    backgroundColor: '#ff5252',
    fontSize: 20,
    height: 20,
    color: 'white',
    fontWeight: '500',
    fontFamily: Fonts.OpenSans,
  }
});

export default HomeScreen;