import fakeRestApi from '../../apis/fakeRestApi';
import { IBook } from '../interfaces/book';
import {
  IAddBookAction,
  IFetchBooksAction,
  IFetchBookAction,
  IEditBookAction,
} from '../interfaces/actions';
import { Dispatch } from 'react';
import {
  ADD_BOOK,
  FETCH_BOOKS,
  FETCH_BOOK,
  EDIT_BOOK,
  DELETE_BOOK,
} from './types';
import { IDeleteBookAction } from '../interfaces/actions';

export const addBook = (book: IBook) => async (
  dispatch: Dispatch<IAddBookAction>
): Promise<void> => {
  const response = await fakeRestApi.post('/books', book);
  dispatch({ type: ADD_BOOK, payload: response.data });
};

export const fetchBooks = () => async (
  dispatch: Dispatch<IFetchBooksAction>
): Promise<void> => {
  const response = await fakeRestApi.get('/books');
  dispatch({ type: FETCH_BOOKS, payload: response.data });
};

export const fetchBook = (id: number) => async (
  dispatch: Dispatch<IFetchBookAction>
): Promise<void> => {
  const response = await fakeRestApi.get(`/books/${id}`);
  dispatch({ type: FETCH_BOOK, payload: response.data });
};

export const editBook = (id: number, body: IBook) => async (
  dispatch: Dispatch<IEditBookAction>
): Promise<void> => {
  const response = await fakeRestApi.patch(`/books/${id}`, body);
  dispatch({ type: EDIT_BOOK, payload: response.data });
};

export const deleteBook = (id: number) => async (
  dispatch: Dispatch<IDeleteBookAction>
): Promise<void> => {
  await fakeRestApi.delete(`/books/${id}`);
  dispatch({ type: DELETE_BOOK, payload: id });
};
