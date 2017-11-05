import React from 'react';
import './App.css';
import {CURRENTLY_READING, WANT_TO_READ, READ} from './App';
import {Link} from 'react-router-dom';
import Book from './Book';

const BooksShelf = (props) => {
	return (
		<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {
                        props.books.filter((book) => CURRENTLY_READING === book.shelf)
                                        .map((book) => <Book book={book} onSelectChange={props.updateBook} key={book.id}/>)
                      }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {
                        props.books.filter((book) => WANT_TO_READ === book.shelf)
                                        .map((book) => <Book book={book} onSelectChange={props.updateBook} key={book.id}/>)
                      }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {
                        props.books.filter((book) => READ === book.shelf)
                                        .map((book) => <Book book={book} onSelectChange={props.updateBook} key={book.id}/>)
                      }
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
        </div>
	)
}
export default BooksShelf
