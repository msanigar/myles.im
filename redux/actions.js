import axios from "axios";
import { SET_DATA } from './actionTypes'

export function getDataAction() {
  return dispatch =>
    axios({
      method: 'GET',
      url: 'https://api.myles.im/wp-json/wp/v2/posts?slug=main'
    }).then(resp => {
      let wpData = resp.data[0]
      let data = {
        ...data,
        main: wpData.content.rendered
      };

      return dispatch({ type: SET_DATA, data });
    });
}
