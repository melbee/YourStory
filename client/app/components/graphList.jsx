' use strict ';
import React from 'react';
import { connect } from 'react-redux';
import Graph from './graph';
import DomainList from './domainList';
import store from '../store';
import fetchGraphOptions from '../actions/fetchGraphOptions';

@connect((store) => { 
  console.log("store inside graphlist: ", store);
  return {
    weekData: store.weekData,
    selectedGraphOptions: store.graphOptions,
  };
})

export default class GraphList extends React.Component {
  constructor(props) {
    super(props);
    console.log("props from graphList.jsx:", this.props);
    
    this.state = {
      selectValue: 'select a domain from graph',
      selectValueIndex: '',
      firstOption: '',
      secondOption: '',
      thirdOption: '',
      natashaData: [],
    };
  }

  natashaData() {
    console.log("checking state inside natashaData: ", this.state);
    console.log("weekData inside graphlist: ", this.props.weekData);
    const data = [];
    this.props.weekData.map((dayObj) => {      
      const newDayObj = {};

      newDayObj.date = dayObj.date;
      newDayObj.domains = [];

      const domainObj = {};

      domainObj.domain = 'allData';
      domainObj.visits = dayObj.count;

      newDayObj.domains.push(domainObj);

      data.push(newDayObj);
    });

    console.log("dayObj: ", data);
    
    this.setState({
      natashaData: data,
    }, () => {
      console.log("new data obj for Natasha: ", this.state.natashaData);
      store.dispatch(fetchGraphOptions(this.state.natashaData));      
    });
  }

  graphChange(graphValue, graphValueIndex) {
    const updateState = new Promise((resolve, reject) => {
      if (graphValueIndex === '0') {
        console.log("trying to setState for 0");
        resolve(this.setState({
          selectValue: graphValue,
          selectValueIndex: graphValueIndex,
          firstOption: graphValue,
        }, () => {
          console.log("check state callback", this.state);
        }));
      } else if (graphValueIndex === '1') {
        console.log("trying to setState for 1");
        resolve(this.setState({
          selectValue: graphValue,
          selectValueIndex: graphValueIndex,
          secondOption: graphValue,
        }, () => {
          console.log("check state callback", this.state);
        }));
      } else if (graphValueIndex === '2') {
        console.log("trying to setState for 2");
        resolve(this.setState({
          selectValue: graphValue,
          selectValueIndex: graphValueIndex,
          thirdOption: graphValue,
        }, () => {
          console.log("check state callback", this.state);
        }));
      }
    });

    updateState.then(() => {
      console.log("updating state")
      this.natashaData();
    });
  }

  render() {
    const uniqueDomains = [];

    this.props.weekData.map((rawDayObj) => {
      rawDayObj['domains'].map((domain) => {
        let url = domain.domain;
        if ((uniqueDomains.indexOf(url)) === -1) {
          uniqueDomains.push(url);
        }
      });
    });

    let graphData = [uniqueDomains, uniqueDomains, uniqueDomains];

    return (
      <div>
        <div className="graph-row">
          {graphData.map((domainList, domainListIndex) => 
            <DomainList domainIndex={domainListIndex} domain={domainList} getValue={this.graphChange.bind(this)} />
          )}
          <br />
        </div>
        <div className="data-parent-container">
          <Graph data={this.state.natashaData} />
        </div>
      </div>
    );
  }
}
