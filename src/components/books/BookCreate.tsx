import React from 'react'
import Form from '../Form'
import { IBook } from '../../shared/interfaces/book';

const BooksCreate: React.FC = () => {
  const onSubmit = (book: IBook) => {
    console.log(book);
  }
  return (
    <div className="m-auto">
      <div className="mt-4">
        <h2 className="text-center">Add Book to Dashboard</h2>
      </div>
      <Form onSubmit={ onSubmit }  />
    </div>
  )
}

export default BooksCreate
