import React, { Component } from 'react';
import Microlink from '@microlink/react'



class LinkPreview extends Component {
    render(){
        return(
            <div className="bx--col-sm-1">
                <div className="outside">
                    <div className="inside">
                        <Microlink url={this.props.post.url} contrast />    
                    </div>
                </div>
            </div>
        )
    }


}


export default LinkPreview;