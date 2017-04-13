import React from 'react';
import {connect} from 'dva';

class Login extends React.Component {
  render() {
    return (
      <div>login</div>
    );
  }
  initData = () => {}
}

export default connect()(Login);
