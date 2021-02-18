import { ADD_BOOK, FETCH_BOOKS, FETCH_BOOK, EDIT_BOOK, DELETE_BOOK } from '../actions/types';
import { IBook } from './book';

export interface IAddBookAction {
  type: typeof ADD_BOOK;
  payload: IBook;
}

export interface IFetchBooksAction {
  type: typeof FETCH_BOOKS;
  payload: IBook[];
}

export interface IFetchBookAction {
  type: typeof FETCH_BOOK;
  payload: IBook;
}

export interface IEditBookAction {
  type: typeof EDIT_BOOK;
  payload: IBook;
}

export interface IDeleteBookAction {
  type: typeof DELETE_BOOK;
  payload: number;
}

export type BookTypes =
  | IAddBookAction
  | IFetchBooksAction
  | IFetchBookAction
  | IEditBookAction
  | IDeleteBookAction;
