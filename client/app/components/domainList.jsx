' use strict ';
import React from 'react';
import { connect } from 'react-redux';
import OptionsList from './options-list';
import fetchGraphOptions from '../actions/fetchGraphOptions';
import store from '../store';

@connect((store) => { 
  console.log("store from graphList:", store);
  return {
    weekData: store.weekData,
    selectedGraphOptions: store.selectedGraphOptions,
  };
})

export default class DomainList extends React.Component {  
  constructor(props) {
    super(props);
    // console.log("props from domainList: ", props);
    this.state = {
      selectValue: 'this.props.domain[0]',
    }
    // console.log("STATE from DomainList", this.state);
  }

  changeWebsite(e) {
    // console.log("Event: ", e.target.value);
    // console.log("this.state inside DomainsList before change: ", this.state);
    store.dispatch(fetchGraphOptions(e.target.value));

    this.setState({
      selectValue: e.target.value,
    });
    // console.log("this.state inside DomainsList after change: ", this.state);
    this.props.getValue(e.target.value);
  }

  render() {
    return (
      <select className="custom-select form-control form-control-sm" value={this.state.selectValue} onChange={this.changeWebsite.bind(this)}>
        <option selected>Compare Website</option>
        {this.props.domain.map((listItem) =>
          <OptionsList value={this.state.selectValue} domain={listItem} />
        )}
      </select>
    );
  }
}
