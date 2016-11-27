'use strict';

import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import GraphList from './graphlist';
import History from './history';
import Categories from './catData';
import Graph from './graph';
import Container from './nav_container';
import getToken from '../chrome/auth';
import Footer from './footer';

@connect((store) => {
  return {
    username: store.username,
  };
})

export default class Dashboard extends React.Component {

  componentDidMount() {

  }

  render(){
    return(
      <div>
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-1"></div>
              <div className="col-sm-10">
                <h5>Sites Visited This Week</h5>
                <GraphList />
              </div>
              <div className="col-sm-1"></div>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-5">
            <div className="row">
              <div className="col-sm-11">
                <h5>Most Visited Sites</h5>
                <div className="data-parent-container">
                  <History />
                </div>
              </div>
              <div className="col-sm-1"></div>
            </div>
          </div>

          <div className="col-sm-5">
            <div className="row">
              <div className="col-sm-1"></div>
              <div className="col-sm-11">
                <h5>Sites By Category</h5>
                <div className="data-parent-container">
                  <Categories />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
    );
  }
}
