import React, {Component} from 'react';
import connect from 'store/connect';

class Product extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  componentWillMount() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    console.log('product', this);
    this.renderList();
    return (
      <div>
        product list
        <hr/> {this.props.user.basicInfo.name || 'test'}
      </div>
    );
  }
  renderList = () => {}
}

export default connect((state) => {
  return {user: state.user};
}, Product);
