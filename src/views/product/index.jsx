import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'dva';
import Header from 'commonComponents/header';
import { Button } from 'antd';

// import List from '../../components/list';


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
    this.renderList();
    return (
      <div>
        <Header />
        <h3>
        product list
        </h3>
        <Button type="primary">this is a button</Button>
        <ul>
          <li>
            <Link to="/product/product-detail">详情</Link>
          </li>
          <li>
            <Link to="/product/product-list">列表</Link>
          </li>
        </ul>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
  renderList = () => {}
}

export default connect()(Product);
