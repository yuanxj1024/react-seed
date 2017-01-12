import React from 'react';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Actions from 'actions';

class HomeView extends React.Component {
  initUser = () => {
    this.props.actions.setUser({name: 'aaron', age: 18});
  }
  bindStoreToChildren = () => {
    return Object.assign({}, this.props.children, {
      props: {
        user: this.props.user,
        actions: this.props.actions,
      },
    });
  }
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
          <button className="btn" onClick={this.initUser}>init user</button>
        </div>
        {this.bindStoreToChildren()}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {user: state.user};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
