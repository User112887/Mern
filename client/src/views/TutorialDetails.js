import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './TutorialDetails.css';

const TutorialDetails = () => {
  const { id } = useParams();
  const [tutorial, setTutorial] = useState(null);

  useEffect(() => {
    fetch('/tutorial-details.json')
      .then(response => response.json())
      .then(data => setTutorial(data[id]))
      .catch(error => console.error('Error loading tutorial details:', error));
  }, [id]);

  if (!tutorial) {
    return <p>Loading...</p>;
  }

  const isYouTubeVideo = tutorial.videoUrl.startsWith('https://www.youtube.com');

  return (
    <div className="tutorial-details">
      <h1>{tutorial.title}</h1>
      <img src={tutorial.thumbnail} alt={tutorial.title} />
      <p>{tutorial.description}</p>
      <div className="video-container">
        {isYouTubeVideo ? (
          <a href={tutorial.videoUrl} target="_blank" rel="noopener noreferrer" className="video-link">
            Watch Video on YouTube
          </a>
        ) : (
          <video controls>
            <source src={tutorial.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <p>{tutorial.content}</p>
      <Link to="/tutorials" className="back-button">Back to Tutorials</Link>
      <div className="extra-content">
        <h2>Additional Resources</h2>
        <ul>
          {tutorial.extraLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TutorialDetails;
