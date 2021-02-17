import React from 'react';
import Form from '../Form';
import { IBook } from '../../shared/interfaces/book';
import { connect, ConnectedProps } from 'react-redux';
import { addBook } from '../../shared/actions/index';

const BookCreate: React.FC<CreateBook> = props => {
  const onSubmit = (book: IBook) => {
    props.addBook(book);
  };

  return (
    <div className="m-auto">
      <div className="mt-4">
        <h2 className="text-center">Add Book to Dashboard</h2>
      </div>
      <Form onSubmit={onSubmit} />
    </div>
  );
};

const connector = connect(null, { addBook });
type CreateBook = ConnectedProps<typeof connector>

export default connector(BookCreate);
