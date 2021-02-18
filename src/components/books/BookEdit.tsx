import React, { useEffect } from 'react';
import Form from '../Form';
import { IBook } from '../../shared/interfaces/book';
import { connect, ConnectedProps } from 'react-redux';
import { editBook, fetchBook } from '../../shared/actions/index';
import { RouteComponentProps } from 'react-router-dom';
interface MatchParams {
  id: string;
}
const BookEdit: React.FC<TEditBook & RouteComponentProps<MatchParams>> = ({
  fetchBook,
  editBook,
  book,
  match,
}) => {
  useEffect(() => {
    fetchBook(+match.params.id);
  }, [fetchBook, match.params.id]);

  const onSubmit = (book: IBook) => {
    editBook(+match.params.id, book);
  };

  return (
    <div className="m-auto">
      <div className="mt-4">
        <h2 className="text-center">Edit Book</h2>
      </div>
      <Form initialValues={book} onSubmit={onSubmit} />
    </div>
  );
};

const mapPropsToState = (
  state: { books: { [key: number]: IBook } },
  ownProps: any
) => {
  return { book: state.books[ownProps.match.params.id] };
};

const connector = connect(mapPropsToState, { editBook, fetchBook });
type TEditBook = ConnectedProps<typeof connector>;

export default connector(BookEdit);
