import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { fetchBooks } from '../../shared/actions/index';
import { IBook } from '../../shared/interfaces/book';

const BooksDashboard: React.FC<TFetchBooks> = ({ books, fetchBooks }) => {
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);
  const renderBooksTr = () => {
    return books.map(book => {
      return (
        <tr key={book.id}>
          <th className="p-3">{book.title}</th>
          <td className="p-3">{book.author}</td>
          <td className="p-3">{book.category}</td>
          <td className="p-3">{book.ISBN}</td>
          <td className="p-3">
            <div className="d-flex justify-content-around ">
              <button type="button" className="btn btn-warning">
                Edit
              </button>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </div>
          </td>
        </tr>
      );
    });
  };

  return (
    <table className="table table-hover table-dark mt-3">
      <thead >
        <tr>
          <th className="p-3" scope="col">Book title</th>
          <th className="p-3" scope="col">Author name</th>
          <th className="p-3" scope="col">Category</th>
          <th className="p-3" scope="col">ISBN</th>
          <th className="p-3" scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>{renderBooksTr()}</tbody>
    </table>
  );
};

const mapPropsToState = (state: { books: { [key: number]: IBook } }) => {
  return { books: Object.values(state.books) };
};

const connector = connect(mapPropsToState, { fetchBooks });
type TFetchBooks = ConnectedProps<typeof connector>;

export default connector(BooksDashboard);
