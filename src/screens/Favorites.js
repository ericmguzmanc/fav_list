import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Fonts } from '../utils/fonts';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Favorites extends PureComponent {

  static navigationOptions = {
    title: 'Favorites',
    headerStyle: {
      backgroundColor: '#ff5252'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontFamily: Fonts.OpenSansBold
    }
  };

  render () {
    return(
      <View>
        <Text style={{fontFamily: Fonts.OpenSansBold, fontSize: 18}}> Favorite Words. </Text>
        {/* <WordsList /> */}
      </View>
    );
  }
}

export default Favorites;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 12,
    paddingRight: 12,
    height: 50,
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
    paddingTop: 10,
    backgroundColor: '#ff5252',
    fontSize: 20,
    height: 20,
    color: 'white',
    fontWeight: '500',
    fontFamily: Fonts.OpenSans,
  }
});
