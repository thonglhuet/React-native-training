import * as types from '../constants';


export const additem = (placeName) => ({
  type: types.ADD_ITEM,
  placeName
});

export const deleteitem = () => ({
  type: types.DELETE_ITEM,
  key
});
