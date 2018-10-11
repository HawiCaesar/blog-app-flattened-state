import produce from 'immer';
import initialState from './initialState';
import constants from '../constants';
const { LOAD_POSTS, ADD_POST, CREATE_COMMENT } = constants;

export default (state = initialState.articles, action) => {
  switch(action.type){
    case LOAD_POSTS:
      return produce(state, draft => {
        draft.articles = action.payload.entities.article
      });
    case ADD_POST:
      let newId = action.payload.id;
      return produce(state, draft => {
        draft.articles[newId] = action.payload
        return draft;
      });
    case CREATE_COMMENT:
      let oldId = action.payload.postId;
      return produce(state, draft => {
        draft.articles[oldId].comments.push(action.payload.comment);
        return draft;
      });
    default:
      return state;
  }
};
