' use strict ';
import React from 'react';
import { connect } from 'react-redux';
import OptionsList from './options-list';
import fetchGraphOptions from '../actions/fetchGraphOptions';
import store from '../store';

@connect((store) => {
  return {
    weekData: store.weekData,
    // selectedGraphOptions: store.selectedGraphOptions,
  };
})

export default class DomainList extends React.Component {
  constructor(props) {
    super(props);
    // console.log("props from domainList.jsx: ", props);
    // console.log("this.state from domainslist ==== ", this.state);
    this.state = {
      selectValue: '',
      selectValueIndex: '',
      firstOption: '',
      secondOption: '',
      thirdOption: '',
    };

    // console.log("this.props from domainList after: ", this.props);
    // console.log("this.state from DomainList after: ", this.state);
  }

  changeWebsite(e) {
    // console.log("Event list item index: ", e.target.value, e.target.id);
    // console.log("this.state inside DomainsList before change: ", this.state);
    // store.dispatch(fetchGraphOptions(e.target.value));    

    if (e.target.id === '0') {
      // console.log("trying to setState for 0 in domainsList.js: ", e.target.value, e.target.id);
      this.setState({
        selectValue: e.target.value,
        selectValueIndex: e.target.id,
        firstOption: e.target.value,
      });
    } else if (e.target.id === '1') {
      // console.log("trying to setState for 1 in domainsList.js: ", e.target.value, e.target.id);
      this.setState({
        selectValue: e.target.value,
        selectValueIndex: e.target.id,
        secondOption: e.target.value,
      });
    } else if (e.target.id === '2') {
      // console.log("trying to setState for 2 in domainsList.js: ", e.target.value, e.target.id);
      this.setState({
        selectValue: e.target.value,
        selectValueIndex: e.target.id,
        thirdOption: e.target.value,
      });
    }

    this.props.getValue(e.target.value, e.target.id);
    // console.log("this.state inside DomainsList after change: ", this.state);
  }

  render() {
    return (
      <select id={this.props.domainIndex} className="custom-select form-control form-control-sm" value={this.state.selectValue} onChange={this.changeWebsite.bind(this)} >
        {this.props.domain.map((listItem) => 
          <OptionsList value={this.state.selectValue} domain={listItem} />
        )}
      </select>
    );
  }
}
