import axios from "axios";
import { SET_DATA } from './actionTypes'

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

