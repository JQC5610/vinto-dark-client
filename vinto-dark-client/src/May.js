import React, { Component } from 'react';
import Post from './Post'
import { Search } from 'carbon-components-react';


class May extends Component {
    render(){
        const postDisplays = this.props.posts.map(post => <Post post={post} key={post.id}/>)
        return(
            <div className="header-container">
                <div className="HeroMay">
                    <div className="HeroGroupMay">
                        <h1>May</h1>
                        <br></br>
                        <br></br>
                        <p>2020</p>
                    </div>
                </div>  
                <div className="search-bar-vinto">
                <Search size="lg"
                    onChange={this.props.onChange}
                    className="search-bar"
                    id="search-1"
                    placeHolderText="Search Type"
                />
                </div>
                <div className="container">
                    <div className="posts">
                        {postDisplays}
                    </div>
                </div>
            </div>
        )
    }
}

export default May;