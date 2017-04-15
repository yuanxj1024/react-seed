import React from 'react';
import {Link} from 'react-router';
import {connect} from 'dva';

class HomeView extends React.Component {
  componentDidMount() {}
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
        <div>
          <input
            placeholder="enter your name"
            ref={(c) => {
              this.userName = c;
            }}
          />
        </div>
        <h3>Hello, {this.props.user.name}</h3>
        <div>
          <button className="btn" onClick={this.initUser}>init user</button>
        </div>
        {this.props.children}
      </div>
    );
  }
  initUser = () => {
    this.props.dispatch({type: 'user/name', payload: this.userName.value});
  }
}

function mapStateToProps(state) {
  return {user: state.user};
}

export default connect(mapStateToProps)(HomeView);
