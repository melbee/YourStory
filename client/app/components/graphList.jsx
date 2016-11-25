' use strict ';
import React from 'react';
import { connect } from 'react-redux';
import Graph from './graph';
import DomainList from './domainList';

@connect((store) => { 
  console.log("store from graphList:", store);
  return {
    weekData: store.weekData,
    selectedGraphOptions: store.selectedGraphOptions,
  };
})

export default class GraphList extends React.Component {
  constructor(props) {
    super(props);
    // console.log("this.props.list from graphList.jsx:", this.props);
    this.state = {
      selectValue: '',
      allOptions: ['a', 'b'],
      // firstOption: this.state.allOptions[0],
      // secondOption: this.state.allOptions[1],
      // thirdOption: '',
    }
  }

  graphChange(graphValue) {
    // console.log("graphValue before changing state: ", graphValue);
    // console.log("this.state.allOptions.length: ", this.state);

    // if ((this.state.allOptions.length <= 3)) {
    //   console.log("inside allOptions");
    //   this.setState({
    //     allOptions: this.state.allOptions.push(graphValue),
    //   })
    // }

    // this.setState({
    //   selectValue: graphValue,
    // });

    // this.props.dispatch({
    //   type: 'FETCH_GRAPH_OPTIONS',
    //   payload: 'hello',
    // });

    // if (this.state.firstOption === '') {
    //   this.setState({
    //     firstOption: graphValue,
    //   });
    // }

    console.log("graphValue after changing state: ", this.state);
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
          {graphData.map((domainList) =>
            <DomainList domain={domainList} getValue={this.graphChange.bind(this)}/>
          )}
          <br />
        </div>
        <div className="data-parent-container">
          <Graph />
        </div>
      </div>
    );
  }
}
