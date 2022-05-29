const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

export let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hey, why nobody love me?', likes: 15 },
        { id: 2, message: 'It is our new program! Hey!', likes: 22 }
      ],
      newPostText: 'ниче не понятно, но довольно интересно'
    },
    dialogsPage: {
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
    },

    friendList: {
      friends: [
        { id: 1, name: 'Eva' },
        { id: 2, name: 'Eva' },
        { id: 3, name: 'Eva' }
      ]
    }
  },
  _callSubscriber() {
    console.log('fjhfjf')
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  addMessage(oneMessage) {
    let newMessage = {
      id: 5,
      message: oneMessage,
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._callSubscriber()
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: Math.floor(Math.random() * 1000),
        message: this._state.profilePage.newPostText,
        likes: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state)
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messages.push({id: Math.floor(Math.random() * 1000), message: body})
      this._callSubscriber()
    }
  }
}

export const addPostActionCreator = () => {
  return {
      type: ADD_POST
  }
}
export const updateNewPostTextActionCreator = (text) => {
  return {
      type: UPDATE_NEW_POST_TEXT ,
      newText: text
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
      body:body
  }
}

//window.store = state;

