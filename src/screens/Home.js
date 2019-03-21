import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WordsList from '../components/WordsList';
import { Fonts } from '../utils/fonts';

import Icon from 'react-native-vector-icons/MaterialIcons';

class Home extends PureComponent {
  render () {
    return(
      <View>

      <View style={styles.container}>

        <View style={styles.homeTitle}>
          <Text style={styles.homeItem}>Favorite List</Text>
        </View>

        <View style={styles.homeBarButton}>
          <Text style={styles.homeItem}>
            <Icon name="list" size={30} color="white" solid/>
          </Text>
        </View>
      </View>

        <WordsList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: 14,
    // paddingBottom: 16,
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
    // flexDirection: 'row',
    paddingTop: 10,
    // paddingBottom: 18,
    // paddingLeft: 12,
    // paddingRight: 12,
    backgroundColor: '#ff5252',
    fontSize: 20,
    height: 20,
    color: 'white',
    fontWeight: '500',
    fontFamily: Fonts.OpenSans,
  }
});

export default Home;