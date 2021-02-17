import React from 'react';
import { Field, reduxForm, WrappedFieldProps, InjectedFormProps } from 'redux-form';
import '../styles/form.scss';
import validate from '../shared/validation/validate';

interface FieldProps {
  id: string;
  label: string;
}


const renderInput = (
  props: FieldProps &
    React.InputHTMLAttributes<HTMLInputElement> &
    WrappedFieldProps
): JSX.Element => {
  const { input, label, id } = props;
  // const { touched, error } = meta;
  return (
    <div className="mb-3">
      <label htmlFor={id}>{label}</label>
      <input
        {...input}
        className="form-control"
        id={id}
        autoComplete="off"
      />
    </div>
  );
};
const Form: React.FC<any> = props => {
  
 
  const submitForm = (book: any) => {
    props.onSubmit(book)
  }
  return (
    <div className="form">
      <form onSubmit={(props as InjectedFormProps).handleSubmit(submitForm)}>
        <Field
          name="title"
          label="Book title"
          id="title"
          component={renderInput}
        />
        <Field
          name="author"
          label="Author name"
          id="author"
          component={renderInput}
        />
        <Field
          name="category"
          label="Category"
          id="category"
          component={renderInput}
        />
        <Field name="ISBN" label="ISBN" id="ISBN" component={renderInput} />

        <button type="submit" className="btn btn-dark">
          Add book
        </button>
      </form>
    </div>
  );
};


export default reduxForm<any>({
  form: 'bookForm',
})(Form);
