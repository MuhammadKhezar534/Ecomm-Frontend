import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import About from './About';
import Home from './containers/Home';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;