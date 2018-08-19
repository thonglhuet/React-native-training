import { connect } from 'react-redux';
import PlaceListItem from '../../components/place_list_item';

const mapStateToProps = (state) => ({
  placeitems: state.placeinput.places
})

export default connect(mapStateToProps, {})(PlaceListItem);
