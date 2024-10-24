import React from 'react';
import { Link } from 'react-router-dom';

const FinancialEducation = () => {
  return (
    <div>
      <h1>Financial Education</h1>
      <ul>
        <li><Link to="/tutorials">Tutorials</Link></li>
        <li><Link to="/articles">Articles</Link></li>
      </ul>
    </div>
  );
};

export default FinancialEducation;
