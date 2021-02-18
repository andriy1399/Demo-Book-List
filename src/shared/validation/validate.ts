import { FormErrors } from 'redux-form';
import { IBook } from '../interfaces/book';

const validate = (values: IBook): FormErrors<IBook> => {
  const numberRegExp = /^\d+$/;
  const errors: FormErrors<IBook> = {};
  if (!values.title) {
    errors.title = 'Please enter title';
  }

  if (!values.category) {
    errors.category = 'Please enter category';
  }

  if (!values.author) {
    errors.author = 'Please enter author name';
  }

  if (!values.ISBN) {
    errors.ISBN = 'Please enter ISBN';
  }
  if (!numberRegExp.test(values.ISBN) && values.ISBN) {
    errors.ISBN = 'Please enter only numbers';
  }

  return errors;
};
export default validate;
