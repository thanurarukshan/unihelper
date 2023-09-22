import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Join from './Join';
import About from './About';
import Library from './Library';
import Headerbar from './Headerbar';


function App() {
  return (
    <Router>
      <Headerbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/join" element={<Join/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/library" element={<Library/>} />
      </Routes>
    </Router>
  );
}

export default App;
