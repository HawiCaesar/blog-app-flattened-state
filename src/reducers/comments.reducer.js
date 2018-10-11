import produce from 'immer';
import initialState from './initialState';
import constants from '../constants';
const { LOAD_COMMENTS, CREATE_COMMENT } = constants;

export default (state = initialState.comments, action) => {
  switch(action.type){
    case LOAD_COMMENTS:
      return produce(state, draft => {
        draft.comments = action.payload.entities.comments
      });
    case CREATE_COMMENT:
      let oldId = action.payload.comment.id;
      return produce(state, draft => {
        draft.comments[oldId] = {"id": oldId, "message": action.payload.comment.message}
      });
    default:
      return state;
  }
};