import * as types from '../constants';


export const additem = (text) => ({
  type: types.ADD_ITEM,
  text
});

export const deleteitem = (key) => ({
  type: types.DELETE_ITEM,
  key
});
