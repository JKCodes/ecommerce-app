import React, { Component } from 'react';

import LogoutForm from '../../containers/LogoutForm';

class Logout extends Component {

  render() {
    return (
      <div className="logout">
        <h3>Are you sure you want to logout?</h3>
        <LogoutForm />
      </div>
    )
  }
}

export default Logout