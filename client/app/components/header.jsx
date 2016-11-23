import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';


import Footer from './footer.jsx';

@connect((store) => {
  return {
    username: store.username,
  };
})

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.changeRoute = this.changeRoute.bind(this);
  }

  changeRoute(routeName) {
    console.log(browserHistory);
    browserHistory.replace(routeName);
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <br />
          <div className="row">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-5">
                  <div >                    
                    <img className="logoImg" alt="Logo" src="../public/assets/logo-yourstory.png" />
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="nav-greeting">
                    <span>Welcome back, <span>{ this.props.username }</span>!</span>
                  </div>
                </div>
                <div className="col-sm-1"></div>
              </div>
            </div>
          </div>
          <br />


          <div className="row">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-12">
                  <center>
                    <label className="custom-control custom-radio">
                      <input id="radio1" name="radio" type="radio" onClick={() => this.changeRoute('/public/index.html')} className="custom-control-input"/>
                      <span className="custom-control-indicator "></span>
                      <span className="custom-control-description">Graph View</span>
                    </label>
                    <label className="custom-control custom-radio">
                      <input id="radio2" name="radio" type="radio" onClick={() => this.changeRoute('/public/index.html/list')} className="custom-control-input"/>
                      <span className="custom-control-indicator"></span>
                      <span className="custom-control-description">List View</span>
                    </label>
                  </center>
                </div>
              </div>
            </div>
          </div>
          <br />

          {this.props.children}

        <center className="footer">
          <Footer />
        </center>

        </div>
      </div>
    );
  }
}
