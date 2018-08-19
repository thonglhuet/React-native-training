import {Component} from 'react';
import { connect} from 'react-redux';
import PlaceList from '../../components/place_list';
const mapStateToProps = state => ({
  place: state.placeinput
});

export default connect(mapStateToProps, {})(PlaceList);
