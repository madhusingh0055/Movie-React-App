
import './App.css';
import React from 'react';
import FetchMovie from './movies/movieList';
import Information from './movies/Information';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="movie-app">
      
         
        
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<FetchMovie />} /> 
          <Route path="/Information/:Id" element={<Information />} />
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
