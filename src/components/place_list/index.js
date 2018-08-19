import React, {Component} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import VisibleItem from './_visible_item';

export default class PlaceList extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    const {place} = this.props;
    return(
        <FlatList style={styles.flatlist} contentContainerStyle={styles.contentContainer}
          data={place.placeLists}
          renderItem={ ({item}) => <VisibleItem placeName={item.placeName} placeImg={item.img} placeKey={item.key}/>}
        />
    )
  }
}
const styles = StyleSheet.create({
  flatlist: {
    marginTop: 5,
    width: '100%'
  },
  contentContainer: {
    justifyContent: "space-between"
  }
})
