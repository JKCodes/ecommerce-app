import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateLoginFormData } from '../redux/modules/LoginForm/actions';
import { login } from '../redux/modules/Auth/actions'
import { withRouter } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  form: {
    margin: '0 auto',
    width: '205px'
  },

  label: {
    display: 'block',
    paddingLeft: '10px',
    margin: '15px auto 5px',
  },

  input: {
    width: '200px',
    height: '20px',
    borderRadius: '5px'
  },

  button: {
    width: '200px',
    fontSize: '1.3em',
    textAlign: 'center',
    margin: '30px auto',
    paddingTop: '10px',
    paddingBottom: '10px',
    border: '2px solid blue',
    borderRadius: '15px',
    background: 'blue',
    color: "#fff",
    boxShadow: '2px 2px 2px 2px #ccc',
    ':hover': {
      background: '#fff',
      color: "blue"
    }
  }
})

class LoginForm extends Component {

  handleOnChange = (e) => {
    const { name, value } = e.target;
    const currentLoginFormData = Object.assign({}, this.props.loginFormData, {
      [name]:value
    })
    this.props.updateLoginFormData(currentLoginFormData)
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.login(this.props.loginFormData, this.props.history)
  }

  render() {
    const { email, password } = this.props.loginFormData

    return (
      <form className={css(styles.form)} onSubmit={this.handleOnSubmit}>
        <div>
          <label className={css(styles.label)} htmlFor="email">Email</label>
          <input
            className={css(styles.input)}
            type="email"
            onChange={this.handleOnChange}
            name="email"
            value={email}
          />
        </div>

        <div>
          <label className={css(styles.label)} htmlFor="password">Password</label>
          <input
            className={css(styles.input)}
            type="password"
            onChange={this.handleOnChange}
            name="password"
            value={password}
          />
        </div>

        <button className={css(styles.button)} type="submit">Login</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loginFormData: state.loginFormData
  }
}

export default withRouter(connect(mapStateToProps, { 
  updateLoginFormData,
  login
})(LoginForm));