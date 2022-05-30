import React from 'react';
import s from '../Profile/Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';


export const Profile = (props) => {
    return <div>
        <ProfileInfo />
        <MyPostsContainer />

    </div>
}