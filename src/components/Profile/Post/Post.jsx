import React from 'react';
import s from '../Post/Post.module.css'

export const Post = (props) => {
    return  <div className={s.item}>
        <img src='https://assets.entrepreneur.com/content/3x2/2000/1651673015-shutterstock-2098527055.jpg?auto=webp&quality=95&crop=16:9&width=675'/>
        {props.message}
        <div>
        <span>Like {props.likes}</span>
        </div>    
    </div>
}