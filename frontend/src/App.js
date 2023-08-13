import './App.css';
import CreateList from './components/Lists.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateList />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
