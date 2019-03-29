import { combineReducers } from 'redux';

import blogReducer from './modules/blog/reducer';
import authReducer from './modules/auth/reducer';
import categoryReducer from './modules/category/reducer';

export default combineReducers({
  blog: blogReducer,
  auth: authReducer,
  category: categoryReducer,
});
