import React from 'react';
import s from '../ProfileInfo/ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://www.iguides.ru/upload/medialibrary/9f8/9f8fdff471b7d281f81f694c100b5adc.png'></img>
            </div>
            <div className={s.descriptionBlock}>
                ava+discription
            </div>
        </div>

    )
};