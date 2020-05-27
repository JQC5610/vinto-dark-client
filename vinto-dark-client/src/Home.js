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
                <div className="Logos">
                    <img src={require('./images/pngwave.png')} width="50" alt="instagram" />
                    <img src="https://www.transparentpng.com/thumb/twitter/twitter-bird-logo-pictures-0.png" alt="twitter bird logo pictures @transparentpng.com" width="50" />
                    <img src={require('./images/pngwing.png')} width="50" alt="youtube"/>
                    <img src="https://pluspng.com/img-png/spotify-logo-png-open-2000.png" width="50" alt="spotify"/>
                    <img src="https://external-preview.redd.it/iDdntscPf-nfWKqzHRGFmhVxZm4hZgaKe5oyFws-yzA.png?auto=webp&s=38648ef0dc2c3fce76d5e1d8639234d8da0152b2" width="50" alt="reddit"/>
                </div>
                </div>
            </div>
            <div className="post-container">
            <PostContainer users={props.users} posts={props.posts} addPost={props.addPost} />
            </div>
        </div>
    )
}

export default Home;