import * as types from '../constants';

const initstate = {
  text: []
}

export default (state = initstate, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      return state.text.push(action.text);
    default:
      return initstate;
  }
}
