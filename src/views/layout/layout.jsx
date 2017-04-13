import React from 'react';
// import {Layout} from 'antd';
import {connect} from 'dva';

class Layout extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
  init() {
    console.log(this);
  }
}

export default connect()(Layout);
