import React from 'react';
import s from '../MyPosts/MyPosts.module.css'
import { Post } from '../Post/Post';

export const MyPosts = (props) => {
    let postsElements = props.posts.map(
        post => (<Post key={post.id} message={post.message} likes={post.likes} />)
    )
    return (
        <div className={s.postsBlock}>
            <h3>MyPosts</h3>
            <div className={s.NewPosts}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>)
}