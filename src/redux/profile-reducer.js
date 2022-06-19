import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = 'SET_STATUS'

let initialState = {
  posts: [
    { id: 1, message: "Hey, why nobody love me?", likes: 15 },
    { id: 2, message: "It is our new program! Hey!", likes: 22 },
  ],
  newPostText: "ниче не понятно, но довольно интересно",
  profile: null,
  status: ""
};
export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: Math.floor(Math.random() * 1000),
        message: state.newPostText,
        likes: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};
export const setStatus = (status) => {
  return { type: SET_STATUS, status};
};

export const getUserProfile = (profileId) => (dispatch) => {
  usersAPI.getProfile(profileId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};

export const getStatus = (profileId) => (dispatch) => {
  profileAPI.getStatus(profileId).then((response) => {
    dispatch(setStatus(response.data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0)
    {dispatch(setStatus(response.data));}
  });
};
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};
