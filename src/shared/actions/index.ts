import fakeRestApi from '../../apis/fakeRestApi';
import { IBook } from '../interfaces/book';
import { IAddBookAction } from '../interfaces/actions';
import { Dispatch } from 'react';
import { ADD_BOOK } from './types';

export const addBook = (book: IBook) => async (
  dispatch: Dispatch<IAddBookAction>
): Promise<void> => {
  const response = await fakeRestApi.post('/books', book);
  dispatch({ type: ADD_BOOK, payload: response.data });
};
