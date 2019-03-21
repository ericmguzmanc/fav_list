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

class WordsList extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={MockedWords}
          keyExtractor={ (element, index) => `${element}${index}`}
          renderItem={({ item }) => <Tile tileItem={item}/>}
        />
      </View>
    );
  }
}

const Tile = ({ tileItem }) => (
  <TouchableNativeFeedback>
    <View style={styles.container}>
      <View style={styles.tileList}>
        <Text style={styles.item}> {tileItem}</Text>
      </View>
      <View style={styles.tileItemButton}>
        <Text style={styles.item}>
          <Icon name="favorite" size={25} color="red" solid/>
        </Text>
      </View>
    </View>
  </TouchableNativeFeedback>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // borderWidth: 1,
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
    backgroundColor: 'transparent',
  },
  tileItemButton: {
    flex: 1,
    paddingRight: 15,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  item: {
    fontSize: 18,
    color: '#262525',
    fontFamily: Fonts.OpenSans
  },
});

export default WordsList;
