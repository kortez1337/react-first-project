import React from "react";
import s from "../MyPosts/MyPosts.module.css";
import Post from "../MyPosts/Post/Post";

const MyPosts = (props) => {
    let postItems = props.posts.map((el) => {
        return <Post id={el.id} message={el.message} likeCount={el.like} />;
    });

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.onPostChange(text);
    };

    let addPost = () => {
        props.addPost();
    };
    return (
        <div className={s.myposts}>
            <div className={s.title}>My posts</div>
            <div className={s.post_add}>
                <div className={s.post_add_text}>
                    <textarea
                        ref={newPostElement}
                        placeholder="Что расскажешь, братан?"
                        value={props.newPostText}
                        onChange={onPostChange}
                    />
                </div>
                <div className={s.post_add_btn}>
                    <button onClick={addPost}>Опубликовать</button>
                </div>
            </div>
            <div className={s.posts}>{postItems}</div>
        </div>
    );
};

export default MyPosts;
