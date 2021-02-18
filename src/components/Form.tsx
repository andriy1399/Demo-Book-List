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
  const classes = `form-control ${error && touched ? 'is-invalid' : ''}`;
  return (
    <div className="mb-3">
      <label htmlFor={id}>{label}</label>
      <input {...input} className={classes} id={id} autoComplete="off" />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

const renderSelect = (
  props: FieldProps &
    React.InputHTMLAttributes<HTMLInputElement> &
    WrappedFieldProps
): JSX.Element => {
  const { input, meta, children } = props;
  const { touched, error } = meta;
  const classes = `form-select ${error && touched ? 'is-invalid' : ''}`;
  return (
    <div className=" mb-3">
      <label htmlFor="category">Category</label>
      <select className={classes} {...input} id="category">
        {children}
      </select>
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

const Form: React.FC<any> = props => {
  const history = useHistory();

  const submitForm = (book: any) => {
    props.onSubmit(book);
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
          component={renderSelect}
          defaultValue={'DEFAULT'}
        >
          <option value="DEFAULT" disabled>
            Choose...
          </option>
          <option value="Classics">Classics</option>
          <option value="Comic Book">Comic Book</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Horror">Horror</option>
          <option value="Literary Fiction">Literary Fiction</option>
          <option value="Detective and Mystery">Detective and Mystery</option>
        </Field>

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
  enableReinitialize: true,
})(Form);
