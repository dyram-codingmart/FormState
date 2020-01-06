import React from "react";
import "./App.css";

import { Form } from "./Form";
import { Login } from "./Login";

class App extends React.Component {
  state = {
    fields: {},
    users: []
  };

  onSubmit = fields => {
    this.setState({ fields });
    let users = this.state.users;
    this.setState({ users: [...users, fields] });
    console.log("App component got : ", fields);
    console.log("Users : ", users);
  };

  validate = loginFields => {
    let usr = this.state.users.filter(user => {
      return user.username === loginFields.username;
    });
    console.log(usr);
    if (usr.length > 0 && usr[0].password === loginFields.password)
      console.log("valid");
    else console.log("invalid");
  };

  render() {
    return (
      <div className="App">
        <div id="signUpForm" className="forms">
          <h1>
            <em>Sign-up Form</em>
          </h1>
          <Form onSubmit={fields => this.onSubmit(fields)} />
        </div>
        <div id="loginForm" className="forms">
          <h1>
            <em>Login Form</em>
          </h1>
          <Login onSubmit={loginFields => this.validate(loginFields)} />
        </div>
      </div>
    );
  }
}

export default App;
