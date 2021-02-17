import React from 'react';
import {
  Field,
  reduxForm,
  WrappedFieldProps,
  InjectedFormProps,
} from 'redux-form';
import '../styles/form.scss';
import validate from '../shared/validation/validate';
import { IBook } from '../shared/interfaces/book';
import { useHistory } from 'react-router-dom';

interface FieldProps {
  id: string;
  label: string;
}

const renderInput = (
  props: FieldProps &
    React.InputHTMLAttributes<HTMLInputElement> &
    WrappedFieldProps
): JSX.Element => {
  const { input, label, id, meta } = props;
  const { touched, error } = meta;
  const classes = `form-control ${error && touched ? 'is-invalid': ''}`
  return (
    <div className="mb-3">
      <label htmlFor={id}>{label}</label>
      <input {...input} className={classes} id={id} autoComplete="off" />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

const Form: React.FC<any> = props => {
  const history = useHistory();

  const submitForm = (book: any) => {
    props.onSubmit(book);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    history.push('/');
  };
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
          Save
        </button>
      </form>
    </div>
  );
};

export default reduxForm<IBook>({
  form: 'bookForm',
  validate,
  enableReinitialize: true
})(Form);
