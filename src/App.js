
import React, {Component} from 'react';
import { Text, View, StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Navigation from './navigation/Navigation';

// const App = createAppContainer(Navigation);
// export default App;

export default class App extends Component{
  render() {
    return (
      // <View>
      //   <StatusBar backgroundColor="#bf3d3d" barStyle="light-content" />
        <Navigation />
      // </View>
    );
  }
}

// export default create

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
