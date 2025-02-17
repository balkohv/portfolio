// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Projects';
import About from './components/About';
import Home from './components/Home';
import CV from './components/CV'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
