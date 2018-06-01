import React from 'react';
import { render, hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import { Frontload } from 'react-frontload';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';

import App from './app/app';
import './index.css';

// Running locally, we should run on a <ConnectedRouter /> rather than on a <StaticRouter /> like on the server
// Let's also let React Frontload explicitly know we're not rendering on the server here
const Application = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Frontload noServerRender>
        <App />
      </Frontload>
    </ConnectedRouter>
  </Provider>
);

const root = document.querySelector('#root');

// Render everything to the root - it's business time
if (process.env.NODE_ENV === 'production') {
  window.onload = () => {
    Loadable.preloadReady().then(() => {
      hydrate(Application, root);
    });
  };
} else {
  render(Application, root);
}
