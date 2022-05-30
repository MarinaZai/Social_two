import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import s from '../MyPosts/MyPosts.module.css'
import { Post } from '../Post/Post';

export const MyPosts = (props) => {
    let postsElements = props.posts.map(
        post => (<Post key={post.id} message={post.message} likes={post.likes} />)
    )

    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={s.postsBlock}>
            <h3>MyPosts</h3>
            <div className={s.NewPosts}>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>)
}