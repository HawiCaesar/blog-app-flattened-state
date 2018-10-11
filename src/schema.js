import { normalize, schema } from 'normalizr';

// Define a users schema
export const user = new schema.Entity('user');
export const arrayOfUsers = new schema.Array(user);

// comments schema
export const commentWithUser = new schema.Entity('comments', {
  commenter: user
});
export const arrayOfCommentsWithUser = new schema.Array(commentWithUser);

// articles schema
export const articlesWithUser =  new schema.Entity('posts', {
  author: user
});
export const arrayOfArticles1 =  new schema.Array(articlesWithUser);

export const objectOfUsers = new schema.Object('users');


// ============

export const comment = new schema.Entity('comments');
export const arrayOfComments = new schema.Array(comment);

// Define your article
export const article = new schema.Entity('article')
export const arrayOfArticles = new schema.Array(article);

export const postsNormalizer = originalData => normalize(originalData, article);