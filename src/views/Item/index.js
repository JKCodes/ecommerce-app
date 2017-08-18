import React, { Component } from 'react';

import Items from '../../containers/Items';

class Item extends Component {

  render() {
    return (
      <div className="item">
        <h3>Items</h3>
        <Items />
      </div>
    )
  }
}

export default Item