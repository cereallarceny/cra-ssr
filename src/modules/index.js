import { combineReducers } from 'redux';

import auth from './auth';
import profile from './profile';

export default combineReducers({
  auth,
  profile
});
