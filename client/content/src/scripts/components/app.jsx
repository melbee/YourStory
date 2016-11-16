import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import History from './history';
import Container from './nav_container';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {    
    console.log('inside app.jsx componentDidMount', this.props);
    document.addEventListener('click', () => {
      this.props.dispatch({
        type: 'ADD_COUNT',
      });
    });
    // document.addEventListener('click', () => {
        this.props.dispatch({
          type: 'FETCH_VIS_DATA',
          payload: [{domain: 'yahoo.com', visits: 50 }],
        });
    // })
  }

  render() {
    return (
      <div>
        <div> {this.props.count} </div>
        <History visualData={this.props} /> 
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state from app.jsx", state);
  return {
    visData: state.visData,
    count: state.count,
  };
};

export default connect(mapStateToProps)(App);
