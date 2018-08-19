import * as types from '../constants';

const initstate = {
  places: [],
  current_selected: null
}

export default (state = initstate, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          name: action.text,
          image: {
            uri:
              "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"
          }
        })
      }
    // case types.DELETE_ITEM:
    //   return {
    //     ...state,
    //     places: state.places.map((item) => {
    //       item.r
    //     })
    //   }
    default:
      return initstate;
  }
}

