import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import "./Articles.css"; 
import Sidebar from './Sidebar';
import ReactPaginate from 'react-paginate';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const articlesPerPage = 3;
  const pagesVisited = pageNumber * articlesPerPage;

  useEffect(() => {
    fetch('/articles.json')
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.error('Error loading articles:', error));
  }, []);

  const pageCount = Math.ceil(articles.length / articlesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className='articles'>
      <Sidebar />
      <h1>Articles</h1>
      <ul>
        {articles
        .slice(pagesVisited, pagesVisited + articlesPerPage)
        .map((article) => (
          <li key={article.id} className='text'>
            <img src={article.thumbnail} alt={article.title} className='thumbnail' />
            <div className='text-content'>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <Link to={`/articles/${article.id}`} className='read-more'>Read More</Link>
              <div className='progress-bar'>
                <div className='progress' style={{ width: `${article.progress}%` }}></div>
              </div>
              <div className='tags'>
                {article.tags.map((tag, index) => (
                  <span key={index} className='tag'>#{tag.toLowerCase().replace(/\s+/g, '-')}</span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>

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

export default Articles;
