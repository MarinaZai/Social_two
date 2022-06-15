const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
  dialogs: [
    { id: 1, name: 'Marina' },
    { id: 2, name: 'Dmitry' },
    { id: 3, name: 'Sasha' },
    { id: 4, name: 'Sveta' },
    { id: 5, name: 'Valera' },
    { id: 6, name: 'Viktor' }
  ],

  messages: [
    { id: 1, message: "I am a normal popover and I can have text and everything" },
    { id: 2, message: "I am a normal popover and I can have text and everything" },
    { id: 3, message: "I am a normal popover and I can have text and everything" },
    { id: 4, message: "I am a normal popover and I can have text and everything" }
  ],

  newMessageBody: ""
}
export const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      };     
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: Math.floor(Math.random() * 1000), message: body } ]
      };
    default:
      return state;
  }
}


export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE
  }
}

export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  }
}