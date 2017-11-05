import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksShelf from './BooksShelf'
import Search from './Search'

export const CURRENTLY_READING = "currentlyReading";
export const WANT_TO_READ = "wantToRead";
export const READ = "read";
export const NONE = "none";
class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books});
    });
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((res) => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter((b) => b.id !== book.id).concat(book)
      }));
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BooksShelf
            books={this.state.books}
            updateBook={this.updateBook}
          />
        )}/>
        <Route path='/search' render={({history}) => (
          <Search
            onBookStatusChange={(book, shelf) => {
              this.updateBook(book, shelf);
              history.push('/');
            }}
            booksOnShelf={this.state.books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
