import React, { Component } from 'react';
import { Localize, Translate } from 'react-redux-i18n';

class Nav extends Component {
  render() {
    return (
      <ul className="c-header-nav">
        <li className="-selected">Workouts</li>
        <li><Translate value="application.title"/></li>
        <li>Scenarios</li>
        <li>Indicators</li>
      </ul>
    )
  };
}

Nav.propTypes = {
};

export default Nav;
