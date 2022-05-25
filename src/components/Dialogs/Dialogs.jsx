import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Dialogs/Dialogs.module.css'

export const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}


export const Dialogs = (props) => {
    let dialogsData = [
        { id: 1, name: 'Marina' },
        { id: 2, name: 'Dmitry' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Sveta' },
        { id: 5, name: 'Valera' },
        { id: 6, name: 'Viktor' }
    ]

    let messegesData = [
        { id: 1, message: "I am a normal popover and I can have text and everything" },
        { id: 2, name: "I am a normal popover and I can have text and everything" },
        { id: 3, name: "I am a normal popover and I can have text and everything"},
        { id: 4, name: "I am a normal popover and I can have text and everything" },
        { id: 5, name: "I am a normal popover and I can have text and everything" },
        { id: 6, name: "I am a normal popover and I can have text and everything" }
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messegesData[0].message}  />
                <Message message={messegesData[0].message}  />
                <Message message={messegesData[0].message}  />
                <Message message={messegesData[0].message}  />
                <Message message={messegesData[0].message}  />
            </div>
        </div>
    )
}