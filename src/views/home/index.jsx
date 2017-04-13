import React from 'react';
import {Link} from 'react-router';
import {connect} from 'dva';

class HomeView extends React.Component {
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
        {this.props.children}
      </div>
    );
  }
  initUser() {
    this.dispatch('user/name');
    // this.props.actions.setUser({name: 'aaron', age: 18});
    // setTimeout(() => {
    //   this.props.actions.setUser({name: 'aaron Yuan', age: 18});
    // }, 5000);
  }

}

function mapStateToProps(state) {
  return {user: state.user};
}

export default connect(mapStateToProps)(HomeView);
