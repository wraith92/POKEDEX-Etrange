import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pokedex from './page/pokedex';
import Navbar from './component/navbar';
import './css/style.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Pokedex />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
