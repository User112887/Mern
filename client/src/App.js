import React from 'react';
import Login from './views/Login';
import Register from './views/Register';
import AddEditExpense from './views/AddEditExpense';
import Dashboard from './views/Dashboard';
import AddEditIncome from './views/AddEditIncome';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import IncomeDashboard from './views/IncomeDashboard';
import FinancialEducation from './views/FinancialEducation';
import Tutorials from './views/Tutorials';
import Articles from './views/Articles';
import TutorialDetails from './views/TutorialDetails';
import ArticleDetails from './views/ArticleDetails';
import Books from './views/Books';

function App() {
  return (
   <Router>
    <div>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="expense/add" element={<AddEditExpense />} />
          <Route path="/expense/edit/:id" element={<AddEditExpense />} />
          <Route path="/income" element={<IncomeDashboard />} />
          <Route path="/income/add" element={<AddEditIncome />} />
          <Route path="/income/edit/:id" element={<AddEditIncome />} />
          <Route path="/financial-education" element={<FinancialEducation/>} />
          <Route path="/tutorials" element={<Tutorials/>} />
          <Route path="/tutorials/:id" element={<TutorialDetails/>} />
          <Route path="/articles" element={<Articles/>} />
          <Route path="/articles/:id" element={<ArticleDetails/>}/>
          <Route path="/books" element={<Books/>}/>
      </Routes>
    </div>
   </Router>
  );
}

export default App;
