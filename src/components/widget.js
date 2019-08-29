import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
// import { Transition } from 'react-transition-group';
import './widget.scss';
import TestBox from './TestBox.js';

class Widget extends Component {
  state = {
    show: false
  };
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({show: true});
    }, 2000)
  };
  
  render() {
    let testBox = null;
    
    if (this.state.show) {
      testBox = <TestBox />;
      setTimeout(() => {
        this.setState({show: false});
      }, 4000)
    };
    
    return (
      <Fragment>
       {testBox}
      </Fragment>
    )
  }
}


export default Widget;
