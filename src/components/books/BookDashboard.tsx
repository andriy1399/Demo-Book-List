import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { fetchBooks } from '../../shared/actions/index';
import { IBook } from '../../shared/interfaces/book';
import { Link } from 'react-router-dom';

const BookDashboard: React.FC<TFetchBooks> = ({ books, fetchBooks }) => {
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);
  const renderBooksTr = (): JSX.Element[] => {
    return books.map(book => {
      return (
        <tr key={book.id}>
          <td className="p-3">{book.title}</td>
          <td className="p-3">{book.author}</td>
          <td className="p-3">{book.category}</td>
          <td className="p-3">{book.ISBN}</td>
          <td className="p-3" style={{ minWidth: '160px' }}>
            <div className="d-flex justify-content-around ">
              <Link
                to={`/books/edit/${book.id}`}
                type="button"
                className="btn btn-warning "
              >
                Edit
              </Link>
              <Link
                to={`/books/delete/${book.id}`}
                type="button"
                className="btn btn-danger "
              >
                Delete
              </Link>
            </div>
          </td>
        </tr>
      );
    });
  };

  const renderEmptyBlock = (): JSX.Element => {
    return (
      <div className="card text-center mt-3">
        <div className="card-header">List of books is empty</div>
        <div className="card-body mt-5 mb-5" >
          <h5 className="card-title">This dashboard have no books</h5>
          <p className="card-text">
           If you want to add some books please click on the button
          </p>
          <Link to="/books/create" className="btn btn-secondary">
            Add a book
          </Link>
        </div>
        <div className="card-footer text-muted">If dashboard doesn't work please check db connection</div>
      </div>
    );
  };

  const renderTable = () => {
    return (
      <div className="table-responsive mt-3">
        <table className="table table-hover table-dark ">
          <thead>
            <tr>
              <th className="p-3" scope="col">
                Book title
              </th>
              <th className="p-3" scope="col">
                Author name
              </th>
              <th className="p-3" scope="col">
                Category
              </th>
              <th className="p-3" scope="col">
                ISBN
              </th>
              <th className="p-3" scope="col">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>{renderBooksTr()}</tbody>
        </table>
      </div>
    );
  };
  return books.length ? renderTable() : renderEmptyBlock();
};

const mapPropsToState = (state: { books: { [key: number]: IBook } }) => {
  return { books: Object.values(state.books) };
};

const connector = connect(mapPropsToState, { fetchBooks });
type TFetchBooks = ConnectedProps<typeof connector>;

export default connector(BookDashboard);
