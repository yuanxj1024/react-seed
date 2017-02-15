import React from 'react';
import {connect} from 'dva';
import './style.scss';

const CountApp = ({count, dispatch}) => {
  return (
    <div className="normal">
      <div className="record">Highest Record: {count.record}</div>
      <div className="current">{count.current}</div>
      <div className="button">
        <button onClick={() => { dispatch({type: 'count/add'}); }}>+</button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {count: state.count};
}

export default connect(mapStateToProps)(CountApp);
