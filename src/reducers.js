import { combineReducers } from 'redux';

import blogReducer from './modules/blog/reducer';
import authReducer from './modules/auth/reducer';

export default combineReducers({
  blog: blogReducer,
  auth: authReducer,
});
