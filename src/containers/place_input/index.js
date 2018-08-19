import { Component } from 'react';
import PlaceInput from '../../components/place_input'

import { connect } from 'react-redux';
import { additem } from '../../actions/place_input';



export default connect(null, { additem })(PlaceInput);






// export default class PlaceInputContainer extends Component {

//   render(){
//     return(
     
      
//     )
//   }
// }
