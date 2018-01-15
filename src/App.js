import React, { Component } from 'react';
import './styles/styles.scss';
import styles from './App.scss';
import logoIcon from './assets/icons/logo.svg';

import Icon from './components/icon';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.header}>
          <Icon icon={logoIcon} className={styles.logo} />
          <h1 className={styles.title}>Welcome to React</h1>
        </header>
        <p className={styles.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
