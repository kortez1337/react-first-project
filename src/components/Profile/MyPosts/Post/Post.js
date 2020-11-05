import React from "react";
import s from "../Post/Post.module.css";

const Post = (props) => {
    return (
        <div className="item">
            <div className="message">{props.message}</div>
            <div className="likes">
                Like &nbsp;
                <span>{props.likeCount}</span>
            </div>
        </div>
    );
};

export default Post;
