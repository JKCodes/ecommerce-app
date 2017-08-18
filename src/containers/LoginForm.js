import React, { Component } from 'react';

class LoginForm extends Component {

  render() {
    const { email, password } = {}

    return (
      <form onSubmit={this.handleOnSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            onChange={this.handleOnChange}
            name="email"
            value={email}
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            onChange={this.handleOnChange}
            name="password"
            value={password}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    )
  }
}

export default LoginForm;