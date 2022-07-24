import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import FeedbackList from './components/FeedbackList/FeedbackList';
import Header from './components/Header/Header';
import FeedbackStats from './components/FeedbackStats/FeedbackStats';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import { FeedbackProvider } from './context/FeedbackContext';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './shared/AboutIconLink';


function App() {

  return (
      <FeedbackProvider>
        <Router>
          <Header 
          text='Feedback Application'
          bgColor='#11122d'
          textColor='#ff6a95'
          />
          <div className="container">
            <Routes>
              <Route exact path='/' element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
                }>
                </Route>
              <Route path='/about' element={<AboutPage />} />
            </Routes>
          </div>
          <AboutIconLink />
        </Router>
      </FeedbackProvider>
  );
}

export default App;
