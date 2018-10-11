import initialState from './initialState';
import constants from '../constants';
const { LOAD_USERS } = constants;

export default (state = initialState.users, action) => {
  switch(action.type){
    case LOAD_USERS:
      return {
        ...state,
        users: action.payload
      }
    default:
      return state;
  }
};