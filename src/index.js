import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store'
import {I18nextProvider} from 'react-i18next'
import i18next from './languages/i18n'

ReactDOM.render(
  // <I18nextProvider i18n={i18next}>
  <Provider store={store}>
    <App />
  </Provider>,
  // </I18nextProvider>,
  document.getElementById('root')
);

reportWebVitals();
