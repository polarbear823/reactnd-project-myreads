import React from 'react';
import './App.css';
import {CURRENTLY_READING, WANT_TO_READ, READ, NONE} from './App'

const Book = (bookProps) => {
  const onShelfChange = e => {
    let shelf = e.target.value;
    bookProps.onSelectChange(bookProps.book, shelf);
  }
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <img className="book-cover" style={{ width: 128, height: 192 }} src={bookProps.book.imageLinks.thumbnail} alt={bookProps.book.title} />
          <div className="book-shelf-changer">
            <select value={bookProps.book.shelf ? bookProps.book.shelf : NONE} onChange={onShelfChange}>
              <option value="moveTo" disabled>Move to...</option>
              <option value={CURRENTLY_READING}>Currently Reading</option>
              <option value={WANT_TO_READ}>Want to Read</option>
              <option value={READ}>Read</option>
              <option value={NONE}>None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{bookProps.book.title}</div>
        { bookProps.book.authors ? bookProps.book.authors.map((author) => <div className="book-authors" key={author}>{author}</div>) : null}     
      </div>
    </li>
  );}
export default Book;