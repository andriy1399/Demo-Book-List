import { FormErrors } from 'redux-form';
import { IBook } from '../interfaces/book';

const validate = (values: IBook, props: any): FormErrors<IBook> => {
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

    if (!values.isbn) {
      errors.isbn = 'Please enter ISBN';
    }
    
    return errors;
};
export default validate;