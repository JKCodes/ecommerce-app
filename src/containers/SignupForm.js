import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSignupFormData } from '../redux/modules/SignupForm/actions'
import { signup } from '../redux/modules/Auth/actions'
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

class SignupForm extends Component {

  handleOnChange = (e) => {
    const { name, value } = e.target;
    const currentSignupFormData = Object.assign({}, this.props.signupFormData, {
      [name]:value
    })
    this.props.updateSignupFormData(currentSignupFormData)
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.signup(this.props.signupFormData, this.props.history)
  }

  render() {
    const { email, password, password_confirmation } = this.props.signupFormData
    return (
      <form className={css(styles.form)} onSubmit={this.handleOnSubmit}>
        <div>
          <label className={css(styles.label)} htmlFor="email">Email:</label>
          <input
            className={css(styles.input)}
            type="email"
            onChange={this.handleOnChange}
            name="email"
            value={email}
          />
        </div>

        <div>
          <label className={css(styles.label)} htmlFor="password">Password:</label>
          <input
            className={css(styles.input)}
            type="password"
            onChange={this.handleOnChange}
            name="password"
            value={password}
          />
        </div>

        <div>
          <label className={css(styles.label)} htmlFor="password_confirmation">Password Confirmation:</label>
          <input
            className={css(styles.input)}
            type="password"
            onChange={this.handleOnChange}
            name="password_confirmation"
            value={password_confirmation}
          />
        </div>

        <button className={css(styles.button)} type="submit">Create New Account</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    signupFormData: state.signupFormData
  }
}

export default withRouter(connect(mapStateToProps, { 
  updateSignupFormData,
  signup
})(SignupForm));