import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Modal, Text, TouchableHighlight } from 'react-native';
import VisibleItem from './_visible_item';

export default class PlaceList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { place, deleteitem } = this.props;
    return (
      <View style={styles.flatlist}>
        <FlatList style={styles.flatlist} contentContainerStyle={styles.contentContainer}
          data={place.placeLists}
          renderItem={({ item }) => <VisibleItem deleteItem={deleteitem} placeName={item.placeName} placeImg={item.img} placeKey={item.key} />}
        />
      </View>
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
