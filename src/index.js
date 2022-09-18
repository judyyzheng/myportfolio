import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,  
         Routes,
         Route, } from "react-router-dom";
import './index.css';
import App from './App';
import Home from './Home';
import Experience from './Experience';
import Projects from './Projects';
import reportWebVitals from './reportWebVitals';
import Contact from './Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/university" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
