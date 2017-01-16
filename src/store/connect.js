/**
 * 将store连接到组件对象上去
 */
import {
  bindActionCreators,
} from 'redux';
import {
  connect,
} from 'react-redux';
import Actions from 'actions';

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default function (mapStateToProps, component) {
  return connect(mapStateToProps, mapDispatchToProps)(component);
}
