import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './components/pages/Projects';
import About from './components/About';

ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<App />} />
            <Route path="/projects" element={<Projects />} />
         </Routes>
      </BrowserRouter>
   </React.StrictMode>,
   document.getElementById('root')
);
