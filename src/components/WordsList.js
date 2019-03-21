import React, { PureComponent } from "react";
import { View, Text, FlatList, StyleSheet, TouchableNativeFeedback } from "react-native";
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
    <View style={styles.tileList}>
      <Text style={styles.item}> {tileItem}</Text>
    </View>
  </TouchableNativeFeedback>
);

const styles = StyleSheet.create({
  container: {
  },
  tileList: {
    flex: 1,
    justifyContent: 'center',
    height: 80,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopWidth: 0.4,
    borderColor: 'lightgray',
    backgroundColor: 'transparent',
  },
  item: {
    fontSize: 18,
    fontFamily: Fonts.OpenSans
  }
});

export default WordsList;
