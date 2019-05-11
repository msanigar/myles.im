import { SET_DATA } from "./actionTypes";
import { initialState } from "./store.js";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
};
