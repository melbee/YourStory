'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

@connect((store) =>{
  return {
    visData: store.visData,
    catData: store.catData,
  };
})

export default class ListView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.options = {
      clearSearch: true,
    };
  }

  render() {
    return (
      <div>
        <BootstrapTable data={this.props.visData} exportCSV search={ true } options={this.options} striped hover>
          <TableHeaderColumn isKey dataField="domain" dataSort> Domains </TableHeaderColumn>
          <TableHeaderColumn dataSort> Category </TableHeaderColumn>
          <TableHeaderColumn dataField="visits" dataSort> Visits</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
