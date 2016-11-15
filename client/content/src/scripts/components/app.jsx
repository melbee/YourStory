import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import History from './history';
import Container from './nav_container';
// import getToken from '../../../../event/src/auth/auth';

// @connect((store) => {
//   return {
//     visData: store.visData,
//   };
// })

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <History visualData={this.props.visData} /> 
    );
  }
}

const mapStateToProps = (state) => {
  return {
    visData: state.visData,
  };
};

export default connect(mapStateToProps)(App);
