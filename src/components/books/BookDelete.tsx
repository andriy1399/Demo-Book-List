import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { IBook } from '../../shared/interfaces/book';
import Modal from '../Modal';
import { deleteBook, fetchBook } from '../../shared/actions/index';
import { RouteComponentProps, Link, useHistory } from 'react-router-dom';
interface MatchParams {
  id: string;
}
const BooksDelete: React.FC<TDeleteBook & RouteComponentProps<MatchParams>> = ({
  deleteBook,
  book,
  fetchBook,
  match,
}) => {
  const history = useHistory();
  useEffect(() => {
    fetchBook(+match.params.id);
  }, [fetchBook, match.params.id]);

  const renderActions = () => {
    const removeBook = () => {
      deleteBook(+match.params.id);
      history.push('/');
    };
    return (
      <React.Fragment>
        <Link
          to="/"
          type="button"
          className="btn btn-dark"
          data-dismiss="modal"
        >
          Cancel
        </Link>
        <button type="button" className="btn btn-danger" onClick={removeBook}>
          Delete
        </button>
      </React.Fragment>
    );
  };

  const renderContent = () => {
    return (
      <div>
        <p>
          <b>Title:</b> {book.title}
        </p>
        <p>
          <b>Author:</b> {book.author}
        </p>
      </div>
    );
  };
  return (
    <Modal
      title="Delete this Book?"
      onDismiss={() => history.push('/')}
      actions={renderActions()}
      content={renderContent()}
    />
  );
};
const mapPropsToState = (
  state: { books: { [key: number]: IBook } },
  ownProps: any
) => {
  return { book: state.books[ownProps.match.params.id] };
};

const connector = connect(mapPropsToState, { deleteBook, fetchBook });
type TDeleteBook = ConnectedProps<typeof connector>;
export default connector(BooksDelete);
