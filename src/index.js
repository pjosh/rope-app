import React from 'react';
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';
import reducers from './reducers'
import { translations, getLocale } from './i18n'
import Root from './components/Root'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let store = createStore(
  reducers,
  applyMiddleware(thunk)
);
syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations));
store.dispatch(setLocale(getLocale()));

render(
  <Root store={store} />,
  document.getElementById('root')
);
registerServiceWorker();
