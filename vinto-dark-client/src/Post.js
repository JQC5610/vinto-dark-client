import React, {Fragment} from 'react';
// import Microlink from '@microlink/react'
import { ReactTinyLink } from 'react-tiny-link'

// import moment from 'moment';

const Post = (props) => {
  return (
      <Fragment>
        <div data-id={props.post.id} className="post">
            <div className="content">
                <div className="title-area">
                <span className="title">{props.post.title}</span>
                </div>
                <div className="meta-area">
                <span className="time">
                    Created at {props.post.created_at} from
                    <strong> {props.post.content}</strong>
                </span>
                </div>
                <div className="preview-area">
                <ReactTinyLink
                    className="microlink"
                    cardSize="small"
                    showGraphic={true}
                    maxLine={2}
                    minLine={1}
                    url={props.post.url}
                />
                </div>
                <div className="link-area" />
            </div>
        </div>
    </Fragment>
  );
};

export default Post;