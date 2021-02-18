import { ADD_BOOK, FETCH_BOOKS, FETCH_BOOK, EDIT_BOOK, DELETE_BOOK } from '../actions/types';
import { BookTypes } from '../interfaces/actions';
import _ from 'lodash';
const bookReducer = (state = {}, action: BookTypes) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, [action.payload.id || 0]: action.payload };
    case FETCH_BOOKS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_BOOK:
      return { ...state, [action.payload.id || 0]: action.payload };
    case EDIT_BOOK:
      return { ...state, [action.payload.id || 0]: action.payload };
    case DELETE_BOOK:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default bookReducer;
