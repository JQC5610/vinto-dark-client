import React from 'react'
import PostContainer from './PostContainer'

const Home = (props) => {
    return (
        <div className="header-container">
            <div className="Hero">
                <div className="HeroGroup">
                  <h1>Vinto</h1>
                  <br></br>
                  <br></br>
                  <p>Conquer Your Content</p>
                </div>
            </div>
            <PostContainer users={props.users} posts={props.posts} addPost={props.addPost} />
        </div>
    )
}

export default Home;