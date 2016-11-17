import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import * as d3 from 'd3';
import History from './history';
import Container from './nav_container';


class App extends React.Component {
  // constructor (props) {
  //   super(props);
  // }

  componentWillMount() {
    if (this.props.chromeID === null) {
      this.props.dispatch({
        type: 'user-clicked-alias',
      });
      this.props.dispatch({
        type: 'FETCH_TOKEN',
        payload: 'got token',
      });
    } else {
      document.addEventListener('click', () => {
        this.props.dispatch({
          type: 'ADD_COUNT',
        });
      });
      // this.props.dispatch({
      //   type: 'FETCH_VIS_DATA_STORE',
      //   // payload: [{ domain: 'espn.com', visits: 50 }, { domain: 'wsj.com', visits: 250 }, { domain: 'yahoo.com', visits: 150 }],
      // }).then((data) => {
      //   console.log(data);
      // })
    }
  }

  render() {
    return (
      <div>
        <div> {this.props.count} </div>
        <History />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("App.js state: ", state);
  return {
    visData: state.visData,
    count: state.count,
    chromeID: state.chromeID,
  };
};

export default connect(mapStateToProps)(App);