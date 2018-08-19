import * as types from '../constants';


export const additem = (placeName) => ({
  type: types.ADD_ITEM,
  placeName
});
