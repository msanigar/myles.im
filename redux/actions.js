import axios from "axios";
import { SET_DATA, TEST_ACTION } from './actionTypes'

export function getData() {
  return dispatch =>
    axios({
      method: 'GET',
      url: 'https://api.myles.im/wp-json/wp/v2/pages'
    }).then(resp => {
      let data = resp.data;
      return dispatch({ type: SET_DATA, data });
    });
}

export function testAction() {
  return dispatch => dispatch({ type: TEST_ACTION })
}