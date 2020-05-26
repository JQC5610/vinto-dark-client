import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home'
import HeaderVinto from './HeaderVinto'
import May from './May'
import 'carbon-components/css/carbon-components.min.css';
import './App.scss';




class App extends Component {

  state = {
    users: [],
    posts: [],
    searchType: ''
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

  handleSearchChange = event => {
    this.setState({ searchType: event.target.value})
}

  render(){
    const searchedType = this.state.posts.filter(item => item.content.toLowerCase().includes(this.state.searchType.toLowerCase()))
    console.log(this.state)
    return (
      <div className="App">
          <HeaderVinto />
        <Switch>
          <Route path='/may' render={() => <May posts={searchedType} onChange={this.handleSearchChange} />} />
          <Route path='/' render={() => <Home users={this.state.users} posts={this.state.posts} addPost={this.addPost}/>} />
          <br />
          <br />
          
        </Switch>
      </div>    
    );
  }
}

export default App;
