import {Component} from 'react';
import { connect} from 'react-redux';
import PlaceList from '../../components/place_list';
import { deleteitem } from '../../actions/place_input';

const mapStateToProps = state => ({
  place: state.placeinput
});

export default connect(mapStateToProps, {deleteitem})(PlaceList);
