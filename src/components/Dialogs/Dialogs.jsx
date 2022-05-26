import React from 'react';
import s from '../Dialogs/Dialogs.module.css'
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';

export const Dialogs = (props) => {
    

    let dialogsElements = props.state.dialogs.map (
        dialog => (<DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />)
        )


    let messagesElements = props.state.messages.map (
        message => (<Message key={message.id} message={message.message} />)
    )
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}