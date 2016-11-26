' use strict ';
import React from 'react';
import { connect } from 'react-redux';
import OptionsList from './options-list';
import fetchGraphOptions from '../actions/fetchGraphOptions';
import store from '../store';

@connect((store) => {
  return {
    weekData: store.weekData,
    selectedGraphOptions: store.selectedGraphOptions,
  };
})

export default class DomainList extends React.Component {
  constructor(props) {
    super(props);
    console.log("props from domainList.jsx: ", props);
    
    this.state = {
      selectValue: this.props.domain[0],
      selectValueIndex: 0,
      allOptionsFromStore: {},
      firstOption: '',
      secondOption: '',
      thirdOption: '',
    };

    console.log("this.props from domainList after: ", this.props);
    console.log("this.state from DomainList after: ", this.state);
  }

  changeWebsite(e) {
    console.log("Event list item index: ", e.target.value, e.target.id);
    // console.log("Event List value: ", e.target.value)
    console.log("this.state inside DomainsList before change: ", this.state);
    
    // store.dispatch(fetchGraphOptions(e.target.value));

//
// OPTION #1
//
    // let first = null;
    // let second = null;
    // let third = null;

    // if (e.target.id === '0') {
    //   console.log("trying to setState for 0");
    //   first = e.target.value;
    // } else if (e.target.id === '1') {
    //   console.log("trying to setState for 1");
    //   second = e.target.value;
    // } else if (e.target.id === '2') {
    //   console.log("trying to setState for 2");
    //   second = e.target.value;
    // }

    // this.setState({
    //   selectValue: e.target.value,
    //   selectValueIndex: e.target.id,
    //   firstOption: first,
    //   secondOption: second,
    //   thirdOption: third,
    // });

//
//option #3
//
    if (e.target.id === '0') {
      console.log("trying to setState for 0");
      this.setState({
        selectValue: e.target.value,
        selectValueIndex: e.target.id,
        firstOption: e.target.value,
      });
    } else if (e.target.id === '1') {
      console.log("trying to setState for 1");
      this.setState({
        selectValue: e.target.value,
        selectValueIndex: e.target.id,
        secondOption: e.target.value,
      });
    } else if (e.target.id === '2') {
      console.log("trying to setState for 2");
      this.setState({
        selectValue: e.target.value,
        selectValueIndex: e.target.id,
        thirdOption: e.target.value,
      });
    }  

    this.props.getValue(e.target.value, e.target.id);
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







