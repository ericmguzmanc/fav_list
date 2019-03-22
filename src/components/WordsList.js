import React, { PureComponent } from "react";
import { View, Text, FlatList, StyleSheet, TouchableNativeFeedback } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Fonts } from "../utils/fonts";

const MockedWords = [
  "AddisonAvenue",
  "AtanasanaLab",
  "JLoTicket",
  "CapotilloMix",
  "LosMinaVenue",
  "ChaChaKill",
  "UmbrellaAcademy",
  "BatmanLair",
  "WatterContent",
  "DynoCave",
  "HazelBridge",
  "The UmbreAcademy",
  "SupermanLair",
  "JuiceContent",
  "LionCave",
  "The Happening",
  "TheShinning",
  "JuiceWaterfal",
  "TigerCave",
  "ChaChaChanga"
];

let alreadySaved = [];

class WordsList extends PureComponent {

  state = {
    MockedWords: MockedWords,
    alreadySaved: alreadySaved
  }


  seeIfSaved = (element) => {
    return this.state.alreadySaved.includes(element);
  }

  saveWord = (element) => {
    if (this.state.alreadySaved.includes(element)) {
      const newAlreadySavedArray = this.state.alreadySaved.filter(word => word != element);
      this.setState({
        alreadySaved: [
          ...newAlreadySavedArray
        ]
      });
      
    } else {
      this.setState({
        alreadySaved: [
          ...this.state.alreadySaved,
          element
        ]
      });
    }

  }
  
  Tile = (item) => (
    <TouchableNativeFeedback
      useForeground={true}
      onPress={() => this.saveWord(item)}
    >
      <View style={styles.container}>
        <View style={styles.tileList}>
          <Text style={styles.item}> {item}</Text>
        </View>
        <View style={styles.tileItemButton}>
          <Text style={styles.item}>
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
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.MockedWords}
          keyExtractor={ (element, index) => `${element}${index}`}
          renderItem={({ item }) => this.Tile(item)}
          extraData={this.state.alreadySaved.length}
          />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 0.3,
    borderColor: 'lightgray',
  },
  tileList: {
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
  item: {
    fontSize: 18,
    color: '#262525',
    fontFamily: Fonts.OpenSans
  },
});

export default WordsList;
