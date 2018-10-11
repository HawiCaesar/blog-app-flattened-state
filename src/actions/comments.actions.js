import axios from 'axios';
import { normalize } from 'normalizr';
import { arrayOfComments } from '../schema';
import constants from '../constants';
const { LOAD_COMMENTS, CREATE_COMMENT } = constants;

export const loadComments = () => ((dispatch) => {
  return axios.get('https://my-json-server.typicode.com/HawiCaesar/jsonplaceholders-demo/comments')
    .then((response) => {
      dispatch({
        type: LOAD_COMMENTS,
        payload: normalize(response.data, arrayOfComments)
      });
    }).catch((error) => {
      console.log('Error Fetching Comments');
    });
});

export const createComment = (postId) => ((dispatch) => {
  const comment = {
    "commenter": {
      "id": 2,
      "name": "Nicole"
    },
    "message": "A New Comment by Nicole"
  }
  return axios.post('https://my-json-server.typicode.com/HawiCaesar/jsonplaceholders-demo/articles', comment)
    .then((response) => {
      // an approach, I am concerned whether dispatching multiple operations will hinder performance
      // try with reduceReducers
      dispatch({
        type: CREATE_COMMENT,
        payload: { postId, "comment": {...comment, "id": 359}}
      });
      // dispatch({
      //   type: UPDATE_COMMENTS_IN_POSTS,
      //   payload: { postId, "comment": {...comment, "id": 359}}
      // });
      // console.log(response);
    })
    .catch((error) => {
      console.log('Error trying to post a comment', error);
    });
});