import React from 'react';
import { TextInput, TouchableOpacity, View, StyleSheet, Text } from 'react-native';

export default class PlaceInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: '123'
    }
  }
  onPress = () => {
    const { additem } = this.props;
    additem(this.state.text);
  }
  onchangeInput = (value) => {
    this.setState({
      text: value
    })
  }

  render() {
    
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={this.onchangeInput}
          value={this.state.text}
        />
        <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
        >
          <Text> Submit </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    width: '70%',
  },
  container: {
    // flex: 1,
    justifyContent: 'space-between',
    // paddingHorizontal: 10,
    flexDirection: 'row',
    width: '100%',
    alignContent: 'center',
  },
  button: {
    width: '30%',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
});
