import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
// import { Transition } from 'react-transition-group';
import './widget.scss';
import TestBox from './TestBox.js';

class Widget extends Component {
  state = {
    showWidget: false
  }
  
  widgetAppearanceHandler = () => {
    this.setState((prevState) => {
      return {showWidget: !prevState.showWidget}
    });
  }
  
  render() {
    return (
      <Fragment>
        <button
          onClick={this.widgetAppearanceHandler}
        >
          Reveal Widget
        </button>
        <TestBox
          show={this.state.showWidget} 
        />
      </Fragment>
    )
  }
}


export default Widget;
