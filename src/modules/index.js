import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth';
import profile from './profile';

export default combineReducers({
  routing: routerReducer,
  auth,
  profile
});
