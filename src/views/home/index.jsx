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
        <h3>Hello, {this.props.user.name}, {this.props.user.age}</h3>
        <div>
          <button className="btn" onClick={this.initUser}>init user</button>
        </div>
        <div>
          <button onClick={this.handleAjaxClick}>ajax Login</button>
          <p>
            result: {this.props.user.ajaxResult}
          </p>
        </div>
        {this.props.children}
      </div>
    );
  }
  initUser = () => {
    this.props.dispatch({type: 'user/name', payload: this.userName.value});
    this.props.dispatch({type: 'user/age', payload: 23});
  }

  handleAjaxClick = () => {
    this.props.dispatch({
      type: 'user/login',
      payload: {
        mobile: '123456789',
        pwd: 'pwd',
      },
    });
  }
}

function mapStateToProps(state) {
  return {user: state.user};
}

export default connect(mapStateToProps)(HomeView);
