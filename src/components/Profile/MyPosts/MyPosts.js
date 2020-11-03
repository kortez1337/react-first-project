import React from "react";
import s from "../MyPosts/MyPosts.module.css";
import Post from "../MyPosts/Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>add post</button>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
