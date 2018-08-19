
import React, {Component} from 'react';
import ListItem from './_visible_item';
import { StyleSheet, FlatList } from 'react-native';
export default class PlaceListItem extends React.Component {
  render(){
    return (
      <FlatList
        data={[{key: 'a'}, {key: 'b'}]}
        renderItem={(item) => <ListItem />}
      />
    )
  }
}

const styles = StyleSheet.create({
  
});
