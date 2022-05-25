import React from 'react';
import s from '../MyPosts/MyPosts.module.css'
import { Post } from '../Post/Post';

export const MyPosts = () => {
    let postData = [
        {id:1, message:'Hey, why nobody love me?', likes:15},
        {id:2, message:'It is our new program! Hey!', likes:22}
    ]
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
                <Post message={postData[0].message} likes={postData[0].likes} />
                <Post message={postData[1].message} likes={postData[1].likes} />
            </div>
        </div>)
}