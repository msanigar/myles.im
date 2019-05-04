import { SET_DATA, SET_DARKMODE } from "./actionTypes";
import { initialState } from "./store.js";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.data
      };
    case SET_DARKMODE:
      return {
        ...state,
        darkmode: !state.darkmode
      };
    default:
      return state;
  }
};
