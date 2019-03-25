import React, { PureComponent } from "react";
import { View, Text, FlatList, StyleSheet, TouchableNativeFeedback } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Fonts } from "../utils/fonts";
import { MockedWords } from "../utils/MockedWords";

import { connect } from 'react-redux';
import { dispatchFavName, dispatchUndoFavName } from '../store/favoritesActions';

class WordsList extends PureComponent {

  state = {
    MockedWords: MockedWords,
  }


  seeIfSaved = (element) => {
    return this.props.favorites.includes(element);
  }

  saveWord = (element) => {
    if (this.props.favorites.includes(element)) {
      this.props.dispatchUndoFavName(element);
    } else {
      this.props.dispatchFavName(element);
    }

  }
  
  Tile = (item) => (
    <TouchableNativeFeedback
      useForeground={true}
      onPress={() => this.saveWord(item)}
      useForeground={true}
    >
      <View style={styles.container}>
        <View style={styles.tileListItem}>
          <Text style={styles.tileItemText}> {item}</Text>
        </View>
        <View style={styles.tileItemButton}>
          <Text style={styles.tileItemText}>
              {this.seeIfSaved(item) ? (
                <Icon name="favorite" size={25} color="red" solid/>
              ) : (
                <Icon name="favorite-border" size={25} color="gray" solid/>
              )}
          </Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );

  
  render() {

    console.log('state favorites', this.props.favorites, '\nalready saved ', this.props.favorites)

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.MockedWords}
          keyExtractor={(element, index) => `${element}${index}`}
          renderItem={({ item }) => this.Tile(item)}
          extraData={this.props.favorites.length}
          />
      </View>
    );
  }
}

const mapStateToProps = ({ favorites }) => {
  return {
    favorites
  }
};

export default connect(mapStateToProps, { dispatchFavName, dispatchUndoFavName })(WordsList);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 0.3,
    borderColor: 'lightgray',
  },
  tileListItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 80,
    paddingLeft: 18,
    paddingRight: 18,
    backgroundColor: 'white',
  },
  tileItemButton: {
    flex: 1,
    paddingRight: 18,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'white',
  },
  tileItemText: {
    fontSize: 18,
    color: '#262525',
    fontFamily: Fonts.OpenSans
  },
});

