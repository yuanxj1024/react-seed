import React, {Component} from 'react';

export default class Product extends Component {
  renderList = () => {
  }
  render() {
    this.renderList();
    return (
      <div>
        product list
        <hr />
        {this.props.user.basicInfo.name || 'test'}
      </div>
    );
  }
}
