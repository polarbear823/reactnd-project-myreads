import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

const MAX_RESULT = 14;
class Search extends Component {
  state = {
    searchBooks: []
  }
  onSearchChange = (e) => {
    let searchTerm = e.target.value;
    if (searchTerm){
      BooksAPI.search(searchTerm, MAX_RESULT).then((searchBooks) => {
        this.setState({searchBooks});
      });
    } else {
      this.setState({searchBooks: []});
    }
  }

  setBookShelf(book) {
    let existingBook = this.props.booksOnShelf.filter((b) => b.id === book.id);
    if (existingBook.length > 0) {
      book.shelf = existingBook[0].shelf;
    }
    return book;
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" onChange={this.onSearchChange}/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.searchBooks.error ?  <div>No results</div> : this.state.searchBooks.map(book => <Book book={this.setBookShelf(book)} onSelectChange={this.props.onBookStatusChange} key={book.id}/>)
            }
          </ol>
        </div>
      </div>
      );
  }
}
export default Search