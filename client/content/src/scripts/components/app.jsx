import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import History from './history';
import Container from './nav_container';
import fetchVisData from '../../../../event/src/actions/fetch_vis_data';

// @connect((store) => {
//   return {
//     visData: store.visData,
//   };
// })

class App extends React.Component {
  componentWillMount() {
      this.props.dispatch(fetchVisData());
  }

  constructor(props) {
    super(props);
    console.log(props);
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
