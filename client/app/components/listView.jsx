' use strict ';
import React from 'react';
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

@connect((store) => { 
  return {
    visData: store.visData,
  };
})

export default class ListView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.products = [
    {
      id: 1,
      name: "Product1",
      price: 120,
    }, {
      id: 2,
      name: "Product2",
      price: 80,
    }];

    this.options = {
      defaultSortName: 'name',  // default sort column name
      defaultSortOrder: 'desc'  // default sort order
    };

  }

  render() {
      console.log('VIS FROM LIST VIEW', this.props.visData);
    return (
      <div>Hello Bruna! 🐠
        <BootstrapTable ref='table' data={this.props.visData} options={ this.options } striped hover>
          <TableHeaderColumn isKey dataField='domain' dataSort> Domains </TableHeaderColumn>
          <TableHeaderColumn dataField='visits' dataSort> Visits</TableHeaderColumn>
         </BootstrapTable>
      </div>
    );
  }
}
