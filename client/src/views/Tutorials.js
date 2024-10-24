import React, { useEffect, useState } from 'react';
import "./Tutorials.css"; // Import the CSS file
import Sidebar from './Sidebar';
import ReactPaginate from 'react-paginate';

const Tutorials = () => {
  const [tutorials, setTutorials] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const tutorialsPerPage = 3;
  const pagesVisited = pageNumber * tutorialsPerPage;

  useEffect(() => {
    fetch('/tutorials.json')
      .then(response => response.json())
      .then(data => setTutorials(data))
      .catch(error => console.error('Error loading tutorials:', error));
  }, []);

  const pageCount = Math.ceil(tutorials.length / tutorialsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className='tutorials'>
      <Sidebar />
      <h1>Tutorials</h1>
      <ul>
        {tutorials
          .slice(pagesVisited, pagesVisited + tutorialsPerPage)
          .map((tutorial) => (
            <li key={tutorial.id} className='text'>
              <img src={tutorial.thumbnail} alt={tutorial.title} className='thumbnail' />
              <div className='text-content'>
                <h2>{tutorial.title}</h2>
                <p>{tutorial.description}</p>
                <a href={`/tutorials/${tutorial.id}`} className='read-more'>Read More</a>
                <div className='progress-bar'>
                  <div className='progress' style={{ width: `${tutorial.progress}%` }}></div>
                </div>
                <div className='tags'>
                  {tutorial.tags.map((tag, index) => (
                    <span key={index} className='tag'>#{tag.toLowerCase().replace(/\s+/g, '-')}</span>
                  ))}
                </div>
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

export default Tutorials;
