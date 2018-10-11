import { combineReducers } from 'redux';
import postsReducer from './posts.reducer';
import usersReducer from './users.reducer';
import commentsReducer from './comments.reducer';

const rootReducer = combineReducers({
  postsReducer,
  usersReducer,
  commentsReducer
});

export default rootReducer;
