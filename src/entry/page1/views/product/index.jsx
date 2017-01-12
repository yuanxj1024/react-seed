import React, {Component, View} from 'react';

export default class Product extends Component {
  renderList = () => {
    console.log(View);
  }
  render() {
    this.renderList();
    return (
      <div>
        product list
      </div>
    );
  }
}
