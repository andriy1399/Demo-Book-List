import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import bookReducer from './booksReducer';
export default combineReducers({
  books: bookReducer,
  form: formReducer
});
