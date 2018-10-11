import axios from 'axios';
import { normalize } from 'normalizr';
import { arrayOfUsers } from '../schema';
import constants from '../constants';
const { LOAD_USERS } = constants;

export const loadUsers = () => ((dispatch) => {
  return axios.get('https://my-json-server.typicode.com/HawiCaesar/jsonplaceholders-demo/users')
    .then((response) => {
      dispatch({
        type: LOAD_USERS,
        payload: normalize(response.data, arrayOfUsers)
      });
    }).catch((error) => {
      console.log('Error Fetching Users');
    });
})