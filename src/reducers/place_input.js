import * as types from "../constants";

const initstate = {
  placeLists: [],
  currentSelected: null
};

export default (state = initstate, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      return {
        ...state,
        placeLists: state.placeLists.concat({
          key: Math.random(),
          img: "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg",
          placeName: action.placeName
        })
      };
    case types.DELETE_ITEM:
      return {
        ...state,
        placeLists: state.placeLists.filter((placeitem) => {
          placeitem.key !== action.key
        })
      };
    default:
      return initstate;
  }
};
