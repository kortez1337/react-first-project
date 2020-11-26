import React from "react";
import s from "../MyPosts/MyPosts.module.css";
import Post from "../MyPosts/Post/Post";
import AddPost from "./AddPost/AddPost";

const MyPosts = (props) => {
    let postItems = props.posts.map((el) => {
        return <Post id={el.id} message={el.message} likeCount={el.like} />;
    });

    let addPost = (formData) => {
        props.addPost(formData.addPostText);
    };

    return (
        <div className={s.myposts}>
            <div className={s.title}>My posts</div>
            <AddPost onSubmit={addPost} />
            <div className={s.posts}>{postItems}</div>
        </div>
    );
};

export default MyPosts;
