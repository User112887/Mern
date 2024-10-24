import React, { useEffect, useState } from 'react';
import './Books.css';
import Sidebar from './Sidebar';
import ReactPaginate from 'react-paginate';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const booksPerPage = 5;
  const pagesVisited = pageNumber * booksPerPage;

  useEffect(() => {
    fetch('/books.json')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error loading books:', error));
  }, []);

  const pageCount = Math.ceil(books.length / booksPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className='books'>
      <Sidebar />
      <h1>Recommended Books for Financial Education</h1>
      <ul className='book-list'>
        {books
          .slice(pagesVisited, pagesVisited + booksPerPage)
          .map((book) => (
            <li key={book.id} className='book-item'>
              <img src={book.thumbnail} alt={book.title} className='book-thumbnail' />
              <div className='book-info'>
                <h2 className='book-title'>{book.title}</h2>
                <p className='book-author'>by {book.author}</p>
                <p className='book-description'>{book.description}</p>
                <a href={book.link} target="_blank" rel="noopener noreferrer" className='book-link'>BUY NOW</a>
              </div>
            </li>
          ))}
      </ul>

      {/* Pagination */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination"}
        previousLinkClassName={"prev"}
        nextLinkClassName={"next"}
        disabledClassName={"disabled"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Books;
