import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';

import Provider from './context';

function App() {
  return (
    <div className='app'>
      <Provider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Index />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
