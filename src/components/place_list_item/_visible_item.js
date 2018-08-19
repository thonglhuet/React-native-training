
import {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
export default class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <TouchableOpacity>
         <Text>Touch Here </Text>
       </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  
});
