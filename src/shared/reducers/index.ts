import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
export default combineReducers({
  deleteMe: () => 'some text',
  form: formReducer
});
