import React from "react";
import { Form, Field } from 'react-final-form' 

export const LoginForm =(props) => {
   
    return <Form
    onSubmit={props.onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="login" component="input" placeholder="login" />
        </div>

        <div>
          <Field name="password" component="input" placeholder="password" />
        </div>

        <div>
          <Field name="remember" component="input" type="checkbox" />remember me
        </div>

        <button type="login">Login</button>
      </form>
    )}
  />
}

export const Login = (props) => {
const onSubmit = (formData) => {
console.log(formData)
}
  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};
