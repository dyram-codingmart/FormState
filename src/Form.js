import React, { Component } from "react";
import "./App.css";

export class Form extends Component {
  state = {
    username: "",
    password: ""
  };

  change = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <form>
        <label>Username&nbsp;</label>
        <input
          type="text"
          name="username"
          placeholder="Name"
          value={this.state.username}
          onChange={e => this.change(e)}
        ></input>
        <br />
        <br />
        <label>Password&nbsp;&nbsp;</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={e => this.change(e)}
        ></input>
        <br />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}

export default Form;
