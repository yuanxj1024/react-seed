import React from 'react';
import {
  Link
} from 'react-router';
import {
  connect
} from 'dva';
import {
  Modal,
  Button
} from 'antd';

class HomeView extends React.Component {
  state = {
    visible: false
  }
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
            name="1"
            placeholder="enter your name" ref={(c) => {
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
        <Button type="primary" onClick={this.showModal}>Open a modal dialog</Button>
        <Modal title="Basic Modal" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
        {this.props.children}
      </div>
    );
  }
  initUser = () => {
    this.props.dispatch({
      type: 'user/name',
      payload: this.userName.value,
    });
    this.props.dispatch({
      type: 'user/age',
      payload: 23,
    });
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
  showModal = () => {
    this.setState({
      visible: true
    });
  }
  handleOk = () => {
    this.setState({
      visible: false
    });
  }
  handleCancel = () => {
    this.setState({
      visible: false
    });
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(HomeView);
