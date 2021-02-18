import '../styles/App.scss';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import BookDashboard from './books/BookDashboard';
import BookCreate from './books/BookCreate';
import BooksDelete from './books/BookDelete';
import BookEdit from './books/BookEdit';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" component={BookDashboard} exact></Route>
          <Route path="/books/create" component={BookCreate}></Route>
          <Route path="/books/delete/:id" component={BooksDelete}></Route>
          <Route path="/books/edit/:id" component={BookEdit}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
