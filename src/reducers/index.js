import * as types from '../constants'
import { combineReducers } from 'redux';
import placeinput from './place_input';

const increment = (initstate = 1, action) => {
  switch (action.types){
    case 'INCREMENT':
      return 1;
    default:
      return 2;
  }
}

export default appReducer = combineReducers({
  increment,
  placeinput
});
