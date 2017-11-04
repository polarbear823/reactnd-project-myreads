import React from 'react';
import './App.css';

const Book = (bookProps) => {
  const onShelfChange = e => {
    bookProps.book.shelf = e.target.value;
    bookProps.onSelectChange(bookProps.book);
  }
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <img className="book-cover" style={{ width: 128, height: 192 }} src={bookProps.book.imageLinks.thumbnail} alt={bookProps.book.title} />
          <div className="book-shelf-changer">
            <select value={bookProps.book.shelf} onChange={onShelfChange}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{bookProps.book.title}</div>
        {bookProps.book.authors.map((author) => <div className="book-authors" key={author}>{author}</div>)}     
      </div>
    </li>
  );}
export default Book;