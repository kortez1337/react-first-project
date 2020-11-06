import React from "react";
import s from "../MyPosts/MyPosts.module.css";
import Post from "../MyPosts/Post/Post";

const MyPosts = (props) => {
    let postItems = props.posts.map((el) => {
        return <Post id={el.id} message={el.message} likeCount={el.like} />;
    });

    return (
        <div className={s.myposts}>
            <div className={s.title}>My posts</div>
            <div className={s.post_add}>
                <div className={s.post_add_text}>
                    <textarea placeholder="Что расскажешь, братан?"></textarea>
                </div>
                <div className={s.post_add_btn}>
                    <button>Опубликовать</button>
                </div>
            </div>
            <div className={s.posts}>{postItems}</div>
        </div>
    );
};

export default MyPosts;
