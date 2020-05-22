import React, { Component } from 'react';
import Microlink from '@microlink/react'

class LinkPreview extends Component {
    render(){
        return(
            <div class="bx--col-sm-1">
                <div class="outside">
                    <div class="inside">
                        <Microlink className="preview-cards" url={this.props.post.url} />    
                    </div>
                </div>
            </div>
        )
    }


}


export default LinkPreview;