import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/diialogs-reducer';
import s from '../Dialogs/Dialogs.module.css'
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';

export const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(
        dialog => (<DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />)
    )

    let messagesElements = state.messages.map(
        message => (<Message key={message.id} message={message.message} />)
    )
    
    let newMessageBody = state.newMessageBody;
    let onSendMessageClck = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.NewMessage}>
                <div>
                    <textarea placeholder='Enter your message' value={newMessageBody} onChange={onNewMessageChange} />
                </div>
                <div>
                    <button onClick={onSendMessageClck} >Add Message</button>
                </div>
            </div>
        </div>
    )
}