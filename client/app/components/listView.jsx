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

    this.options = {
      clearSearch: true,
    };
  }

  render() {
    return (
       <div>
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-1"></div>
              <div className="col-sm-10">
                <BootstrapTable data={this.props.visData} exportCSV search={ true } options={this.options} striped hover pagination>
                  <TableHeaderColumn isKey dataField="domain" dataSort> Domains </TableHeaderColumn>
                  <TableHeaderColumn dataField="visits" dataSort> Visits</TableHeaderColumn>
                </BootstrapTable>
              </div>
              <div className="col-sm-1"></div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}
