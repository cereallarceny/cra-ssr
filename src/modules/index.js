import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import notification from './notification';

export default combineReducers({
  routing: routerReducer,
  notification
});
