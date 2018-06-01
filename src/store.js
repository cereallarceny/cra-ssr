import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { createBrowserHistory, createMemoryHistory } from 'history';
import rootReducer from './modules';

// A nice helper to tell us if we're on
export const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

// Create a history depending on the environment
export const history = isServer
  ? createMemoryHistory()
  : createBrowserHistory();

const enhancers = [];

// Dev tools are helpful
if (process.env.NODE_ENV === 'development' && !isServer) {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const middleware = [thunk, routerMiddleware(history)];
const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

// Get the preloaded state from the server
const initialState = !isServer ? window.__PRELOADED_STATE__ : {};

// Delete it once we have it stored in a variable
if (!isServer) {
  delete window.__PRELOADED_STATE__;
}

// Create and export the store
const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
