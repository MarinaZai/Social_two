import React from 'react';
import s from '../Profile/Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';


export const Profile = (props) => {
    return <div>
        <ProfileInfo />
        <MyPosts posts={props.profilePage.posts} dispatch={props.dispatch} newPostText={props.profilePage.newPostText}/>

    </div>
}