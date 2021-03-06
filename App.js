import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './src/reducers';
let composeEnhancers = compose;
if (__DEV__) {//only avaiable on developement 
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
let store = createStore(allReducers, composeEnhancers());
import PlaceInputContainer from './src/containers/place_input'
import PlaceList from './src/containers/place_list';












export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <PlaceInputContainer/>
          <PlaceList/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
});
