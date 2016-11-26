' use strict ';
import React from 'react';
import { connect } from 'react-redux';
import Graph from './graph';
import DomainList from './domainList';


@connect((store) => { 
  return {
    weekData: store.weekData,
    // selectedGraphOptions: store.selectedGraphOptions,
  };
})

export default class GraphList extends React.Component {
  constructor(props) {
    super(props);
    console.log("tprops from graphList.jsx:", this.props);
    
    this.state = {
      selectValue: 'select a domain from graph',
      selectValueIndex: '',
      // allOptionsFromStore: {},
      firstOption: '',
      secondOption: '',
      thirdOption: '',
    };
  }

  natashaData() {
    console.log("checking state inside natashaData: ", this.state);
  }

  graphChange(graphValue, graphValueIndex) {
    // console.log("graphValue, graphValueIndex: ", graphValue, graphValueIndex);

    if (graphValueIndex === '0') {
      console.log("trying to setState for 0");
      this.setState({
        selectValue: graphValue,
        selectValueIndex: graphValueIndex,
        firstOption: graphValue,
      }, () => {
        console.log("check state callback", this.state);
      });
    } else if (graphValueIndex === '1') {
      console.log("trying to setState for 1");
      this.setState({
        selectValue: graphValue,
        selectValueIndex: graphValueIndex,
        secondOption: graphValue,
      }, () => {
        console.log("check state callback", this.state);
      });  
    } else if (graphValueIndex === '2') {
      console.log("trying to setState for 2");
      this.setState({
        selectValue: graphValue,
        selectValueIndex: graphValueIndex,
        thirdOption: graphValue,
      }, () => {
        console.log("check state callback", this.state);
      });
    }

    // console.log("graphValue after changing state: ", this.state);
    this.natashaData();
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
          <Graph data={this.state.selectValue} />
        </div>
      </div>
    );
  }
}
