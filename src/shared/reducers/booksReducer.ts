import { ADD_BOOK } from '../actions/types';
import { BookTypes } from '../interfaces/actions';
const bookReducer = (state = {}, action: BookTypes) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, [action.payload.id || 0]: action.payload };
    default:
      return state;
  }
};

export default bookReducer;
