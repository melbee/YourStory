'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

@connect((store) =>{
  return {
    visData: store.visData,
  };
})

export default class ListView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.options = {
      defaultSortName: 'name',  // default sort column name
      defaultSortOrder: 'desc',  // default sort order
    };
  }

  render() {
    return (
      <div>Hello Bruna! 🐠
        <BootstrapTable data={this.props.visData} options={this.options} striped hover>
          <TableHeaderColumn isKey dataField="domain" dataSort> Domains </TableHeaderColumn>
          <TableHeaderColumn dataField="visits" dataSort> Visits</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
