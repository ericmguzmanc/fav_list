import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WordsList from '../components/WordsList';
import { Fonts } from '../utils/fonts';

class Home extends PureComponent {
  render () {
    return(
      <View style={styles.container}>
        <Text style={styles.homeItem}>Random Startup Generator</Text>
        <WordsList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  homeItem: {
    paddingTop: 18,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 18,
    borderBottomWidth: 0,
    fontSize: 20,
    color: 'white',
    backgroundColor: '#F44336',
    fontWeight: '500',
    fontFamily: Fonts.OpenSansBold,
  }
});

export default Home;