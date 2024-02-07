import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import About from './About';
import Home from './containers/Home';
import Products from './containers/Products';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id/:name" element={<Products />} />
      </Routes>
    </Router>
  );
};

export default App;