import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HeaderVinto from './HeaderVinto'
import PostContainer from './PostContainer'
import 'carbon-components/css/carbon-components.min.css';
import './App.scss';




class App extends Component {

  state = {
    users: [],
    posts: []
  }

  componentDidMount(){
    const fetchUsers = () => {
      fetch('http://localhost:3001/users')
      .then(resp => resp.json())
      .then(data => this.setState({ users: data })) 
    }
    const fetchPosts = () => {
      fetch('http://localhost:3001/posts')
      .then(resp => resp.json())
      .then(data => this.setState({ posts: data }))
    }
    fetchUsers()
    fetchPosts()
  }

  addPost = post => {
    this.setState({ posts: [...this.state.posts, post] })
  }

  render(){
    console.log(this.state)
    return (
      <div className="App">
        <HeaderVinto />
        {/* <Route path='/may' render={() => <May />} /> */}
        <br />
        <br />
        <PostContainer users={this.state.users} posts={this.state.posts} addPost={this.addPost} />
        
      </div>
    );
  }
}

export default App;
