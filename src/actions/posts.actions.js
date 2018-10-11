import axios from 'axios';
import { normalize } from 'normalizr';
import { arrayOfArticles1, arrayOfArticles, arrayOfCommentsWithUser, objectOfUsers } from '../schema';
import constants from '../constants';
const { LOAD_POSTS, ADD_POST } = constants;

export const loadPosts = () => ((dispatch) => {
  return axios.get('https://my-json-server.typicode.com/HawiCaesar/jsonplaceholders-demo/articles')
    .then((response) => {

      let allComentsFromResponse = [];
      let allArticlesFromResponse = [];

      let normalizedComments;
      let normalizedArticles;
      let normalizedUsers;
      
      for(let i = 0; i < response.data.length; i++) {
        allComentsFromResponse = allComentsFromResponse.concat(response.data[i].comments);
        allArticlesFromResponse.push({
          "id": response.data[i].id,
          "author": response.data[i].author,
          "title": response.data[i].title,
        });
      }

      normalizedComments = normalize(allComentsFromResponse, arrayOfCommentsWithUser);
      normalizedArticles = normalize(allArticlesFromResponse, arrayOfArticles1);

      normalizedUsers = {...normalizedArticles.entities.user, ...normalizedComments.entities.user};

      console.log('====> Comments', normalizedComments);
      console.log('=====> Posts', normalizedArticles);
      console.log('=====> User', normalizedUsers);
      

      dispatch({
        type: LOAD_POSTS,
        payload: normalize(response.data, arrayOfArticles)
      });
    }).catch((error) => {
      console.log('Error Fetching', error);
    });
});

export const addPost = () => ((dispatch) => {
  const articleDetails = {
    "author": {
      "id": 1,
      "name": "Paul"
    },
    "title": "This is a new blog post",
  }
  return axios.post('https://my-json-server.typicode.com/HawiCaesar/jsonplaceholders-demo/articles', articleDetails)
    .then((response) => {
      dispatch({
        type: ADD_POST,
        payload: {...articleDetails, "id": 126 }
      });
    }).catch((error) => {
      console.log('Could not add post')
    })

});