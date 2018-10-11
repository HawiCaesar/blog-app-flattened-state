import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPosts, addPost } from './actions/posts.actions';
import { loadUsers } from './actions/users.actions';
import { loadComments, createComment } from './actions/comments.actions';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount(){
    this.props.loadUsers();
    this.props.loadComments();
    this.props.loadPosts();
  }

  onCreatePost = () => {
    // create here
    this.props.addPost();
  }

  onCreateComment = () => {
    this.props.createComment(123);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={this.onCreatePost}>Create Post</button>
          <button onClick={this.onCreateComment}>Add Comment</button>
        </header>
      </div>
    );
  }
}

const mapStateTopProps = ({ postsReducer, usersReducer, commentsReducer }) => ({
  posts: postsReducer,
  users: usersReducer,
  comments: commentsReducer
});

export default connect(mapStateTopProps, {
  loadPosts,
  loadComments,
  loadUsers,
  addPost,
  createComment
})(App);
