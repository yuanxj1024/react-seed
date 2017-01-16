import React, {Component} from 'react';
import connect from 'store/connect';

require('./style.scss');

class Header extends Component {
  componentDidMount() {
    console.log('did');
  }
  render() {
    return (
      <div className="header">
        <h1> Header </h1>
      </div>
    );
  }
}

export default connect((state) => {
  return {user: state.user};
}, Header);
