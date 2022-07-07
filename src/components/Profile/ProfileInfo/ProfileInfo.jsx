import React from 'react';
import { Preloader } from '../../common/Preloader/Preloader';
import s from '../ProfileInfo/ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


export const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return (
        <div>
     {/*        <div>
                <img className={s.oboi} alt='oboi' src='https://www.iguides.ru/upload/medialibrary/9f8/9f8fdff471b7d281f81f694c100b5adc.png'></img>
            </div> */}
            <div className={s.descriptionBlock}>
                    <img src={props.profile.photos.large} alt='largeava'/>
                <div>{props.profile.fullName}</div>
                < ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
};
