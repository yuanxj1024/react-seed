import React, {Component} from 'react';
import {connect} from 'dva';
import Header from 'commonComponents/header';
import { Button } from 'antd';

import List from '../../components/list';


class Product extends Component {
  constructor() {
    super();
    this.state = Object.assign({}, {count: 0});
  }
  componentWillMount() {
    this.setState({
      count: this.state.count + 1,
      abc: 123
    });
  }
  render() {
    console.log('product', this);
    this.renderList();
    return (
      <div>
        <Header />
        <List/>
        <Button type="primary">this is a button</Button>
        product list
        <hr/> {this.props.user.basicInfo.name || 'test'}
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
  renderList = () => {}
}

export default connect((state) => {
  return {user: state.user};
})(Product);
