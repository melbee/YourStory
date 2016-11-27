'use strict';

import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import GraphList from './graphlist';
import History from './history';
import Categories from './catData';
import Graph from './graph';
// import Container from './nav_container';
import getToken from '../chrome/auth';
import Footer from './footer';

import Dashboard from './dashboard.jsx';
import ListView from './listView.jsx';
import Header from './header.jsx';

export default class App extends React.Component {

  componentWillMount() {
    getToken();
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/public/index.html" component={Header}>
          <IndexRoute component={Dashboard} />
          <Route path="/public/index.html/list" component={ListView} />
        </Route>
      </Router>
    );
  }
}
