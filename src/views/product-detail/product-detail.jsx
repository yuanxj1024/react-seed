import React from 'react';
import {connect} from 'dva';

class Detail extends React.Component {
  render() {
    return (
      <div>
        <h2>product detail</h2>
      </div>
    );
  }
  initData = () => {
    console.log('init');
  }
}

export default connect()(Detail);
