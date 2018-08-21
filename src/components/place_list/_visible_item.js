import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  Modal,
  TouchableHighlight
} from "react-native";

export default class VisibileItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: null,
      modalVisible: false
    };
  }

  componentDidMount() {
    this.setState({
      key: this.props.placeKey
    });
  }

  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };

  onHandleDelete = () => {
    const { deleteItem } = this.props;
    deleteItem(this.state.key);
  }

  render() {
    const { placeName, placeImg, placeKey } = this.props;
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
        >
          <View style={{ marginTop: 22, alignItems: "center" }}>
            <View style={{ alignItems: "center", justifyContent: "space-between" }}>
              <Image source={{ uri: placeImg }} style={styles.image_profile} />
              <Text>{placeName}</Text>
              <TouchableOpacity style={styles.deleteButton} onPress={this.onHandleDelete}>
                <Text> Delete Item </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteButton}>
                <Text>Close</Text>
              </TouchableOpacity>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableOpacity
          style={styles.wrap}
          onPress={this.setModalVisible} // TODO show modal
        >
          <View style={styles.view}>
            <Image source={{ uri: placeImg }} style={styles.image} />
            <Text style={styles.text}>{placeName}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: "#DDDDDD",
    padding: 8,
    marginTop: 2,
    flexDirection: "row"
  },
  image: {
    width: 50,
    height: 50
  },
  image_profile: {
    width: 200,
    height: 200
  },
  view: {
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    marginLeft: 10
  },
  deleteButton: {
    width: "30%",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});
