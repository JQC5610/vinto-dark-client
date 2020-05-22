import React, { Component } from 'react';
import PostForm from './PostForm';
import LinkPreview from './LinkPreview'





class PostContainer extends Component {


    render(){
        const links = this.props.posts.map(post => <LinkPreview post={post} key={post.id}/> )
        return(
            <React.Fragment>
                <div className="add-post-form">
                    <PostForm users={this.props.users} addPost={this.props.addPost}/>
                </div>
                <br/>
                <div class="bx--grid">
                    <div class="bx--row">
                        {links}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default PostContainer;