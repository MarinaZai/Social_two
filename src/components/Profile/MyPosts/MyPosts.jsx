import React from 'react';
import { Form, Field } from "react-final-form";
import s from '../MyPosts/MyPosts.module.css'
import { Post } from '../Post/Post';

export const MyPosts = (props) => {
    let postsElements = props.posts.map(
        post => (<Post key={post.id} message={post.message} likes={post.likes} />)
    )

    let newPostElement = React.createRef();
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }
    return (
        <div className={s.postsBlock}>
            <h3>MyPosts</h3>
  {/*           <div className={s.NewPosts}>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div> */}
            <AddNewPostForm onSubmit={onAddPost}  />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>)
}

export const AddNewPostForm = (props) => {
    return (
      <Form
          onSubmit={props.onSubmit} 
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={s.NewMessage}>
            <div>
              <Field
                name="newPostText"
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