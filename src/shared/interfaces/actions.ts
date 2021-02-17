import { ADD_BOOK } from '../actions/types';
import { IBook } from './book';

export interface IAddBookAction {
  type: typeof ADD_BOOK;
  payload: IBook
}

export type BookTypes = IAddBookAction;