import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { connect } from 'react-redux';

import { Fonts } from '../utils/fonts';

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
      <View style={styles.container}>
        {
          this.props.favorites.length <= 0 ?
          (
            <View style={styles.emptyMsg}>
              <Text >
                You don't have Favorite words yet.
              </Text>
            </View>
          ) : (
            <FlatList 
              data={this.props.favorites}
              keyExtractor={(element, index) => `${element}${index}`}
              renderItem={({ item }) => Tile(item)}
            />
          )
        }
        
      </View>
    );
  }
}

const Tile = (item) => (
  <View style={styles.tileListItem}>
    <Text style={styles.tileItemText}>{item}</Text>
  </View>
);

mapStateToProps = ({ favorites }) => {
  return {
    favorites
  }
};

export default connect(mapStateToProps)(Favorites);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  emptyMsg: {
    flex: 1,
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
  },
  tileListItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 80,
    paddingLeft: 18,
    paddingRight: 18,
    backgroundColor: 'white',
    borderBottomWidth: 0.3,
    borderColor: 'lightgray',
  }, 
  tileItemText: {
    fontSize: 18,
    color: '#262525',
    fontFamily: Fonts.OpenSans
  }
});
