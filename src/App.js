
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './page/home';
import Pokedex from './page/pokedex';

function App() {
  return (
    <Router>
      <div className="App">
      <nav className="bg-gray-800">
  <ul className="flex">
    <li>
      <Link to="/" className="text-white px-4 py-2">Accueil</Link>
    </li>
    <li>
      <Link to="/Pokedex" className="text-white px-4 py-2">Pokedex</Link>
    </li>
   
  </ul>
</nav>


        <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/Pokedex" element={< Pokedex/>} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
