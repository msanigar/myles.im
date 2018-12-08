import { SET_DATA, TEST_ACTION } from "./actionTypes";
import { initialState } from "./store.js";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.data
      };
      case TEST_ACTION:
      return {
        ...state,
        test: true
      };
    default:
      return state;
  }
};
