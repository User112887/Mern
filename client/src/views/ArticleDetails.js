import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ArticleDetails.css';

const ArticleDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch('/article-details.json')
      .then(response => response.json())
      .then(data => {
        const selectedArticle = data.find(article => article.id === parseInt(id));
        setArticle(selectedArticle);
      })
      .catch(error => console.error('Error loading article details:', error));
  }, [id]);

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <div className="article-details">
      <h1>{article.title}</h1>
      <img src={article.thumbnail} alt={article.title} />
      <p>{article.description}</p>
      <p>{article.content}</p>
      <Link to="/articles" className="back-button">Back to Articles</Link>

      <div className="extra-content">
        <h2>Additional Resources</h2>
        {article.extraLinks && article.extraLinks.length > 0 ? (
          <ul>
            {article.extraLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No additional resources available for this article.</p>
        )}
      </div>
    </div>
  );
};

export default ArticleDetails;
