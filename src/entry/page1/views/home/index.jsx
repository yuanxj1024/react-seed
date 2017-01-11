import React from 'react';
import { Link } from 'react-router';

export default class HomeView extends React.Component {
  show = () => {
  }
  render() {
    return (
      <div>
        <h1>Home View</h1>
        <ul>
          <li>
            <Link to="/about">
              to about</Link>
          </li>
          <li>
            <Link to="/product">
              to product</Link>
          </li>
        </ul>
        { this.props.children }
      </div>
    );
  }
}
