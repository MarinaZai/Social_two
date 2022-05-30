import { dialogsReducer } from "./diialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";

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
    sidebar: {},

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state)
  }
}


window.store = store;

