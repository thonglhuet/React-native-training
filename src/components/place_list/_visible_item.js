import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image
} from 'react-native'

export default class VisibileItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      key: null,
    }
  }

  componentDidMount(){
    this.setState({
      key: this.props.placeKey
    })
  }
  render(){
    const { placeName, placeImg, placeKey } = this.props;
    return(
       <TouchableOpacity
         style={styles.wrap}
         onPress={() => {}}
       >
        <View style={styles.view}>
          <Image source={{uri: placeImg}} style={styles.image} />
          <Text style={styles.text}>{placeName}</Text>
        </View>
       </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#DDDDDD',
    padding: 8,
    marginTop: 2,
    flexDirection: 'row'
  },
  image: {
    width: 50,
    height: 50
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
  }
})
