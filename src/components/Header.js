import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Nav from './Nav';

class Header extends Component {
  render() {
    return (
      <div className="c-header">
        <div className="row">
          <div className="small-1 columns"></div>
          <div className="small-5 columns">
            <div className="c-header__title">{this.props.name}</div>
          </div>
          <div className="small-12 columns">
            <Nav />
          </div>
        </div>
        <div className="c-header__background"></div>
      </div>
    )
  };
}

Header.propTypes = {
  name: PropTypes.string.isRequired
};

export default Header;
