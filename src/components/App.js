import React, { Component } from 'react';
import PropTypes from 'prop-types';
import base from '../base';

import Loader from './Loader';
import Header from './Header';

class App extends Component {

  constructor () {
    super();

    this.state = {
      name: null,
      wods: [],
      loading: true
    }
  }

  componentWillMount() {
    this.refName = base.syncState(`${this.props.match.params.boxId}/name`, {
      context: this,
      state: 'name'
    });

    this.refWods = base.syncState(`${this.props.match.params.boxId}/wods`, {
      context: this,
      state: 'wods',
      asArray: true,
      then() {
        this.setState({loading: false})
      }
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.refName);
    base.removeBinding(this.refWods);
  }

  render() {
    if (this.state.loading) {
      return (
        <Loader />
      );
    } else {
      return (
        <div className="App">
          <Header name={this.state.name} />
        </div>
      );
    }
  }
}

App.propTypes = {
  match: PropTypes.object.isRequired
};

export default App;
