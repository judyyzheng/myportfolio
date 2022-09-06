import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,  
         Routes,
         Route, } from "react-router-dom";
import './index.css';
import App from './App';
import Home from './Home';
import Projects from './Projects';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Home />} />
      <Route path="/university" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
