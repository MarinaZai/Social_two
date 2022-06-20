import React from "react";
import { Navigate } from "react-router-dom";
import s from "../Dialogs/Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import { Form, Field } from "react-final-form";

export const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = state.messages.map((message) => (
    <Message key={message.id} message={message.message} />
  ));

  let newMessageBody = state.newMessageBody;

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Navigate to={"/login"} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <AddMessageForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

export const AddMessageForm = (props) => {
  return (
    <Form
        onSubmit={props.onSubmit} 
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={s.NewMessage}>
          <div>
            <Field
              name="newMessageBody"
              component="textarea"
              placeholder="Enter your message"
            />
          </div>
          <div>
            <button>Add Message</button>
          </div>
        </form>
      )}
    />
  );
};

