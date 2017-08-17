import React, { Component } from 'react';
import { connect } from 'react-redux';

class SignupForm extends Component {

  render() {
    return (
      <form>
      
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    signupFormData: state.signupFormData
  }
}

export default connect(mapStateToProps)(SignupForm);