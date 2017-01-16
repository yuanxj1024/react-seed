import React, {Component} from 'redux';
import connect from 'store/connect';

class Header extends Component {
  componentDidMount() {
    console.log('did');
  }
  render() {
    return (
      <div>
        <h1>Header</h1>
      </div>
    );
  }
}

export default connect((state) => {
  return {user: state.user};
}, Header);
