import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import New from './lect.js';
import reportWebVitals from './reportWebVitals';
import Main from './home';
import Ex from './ex';
import Engneering from './engineering';
import Course from  './course.js';
import Login from './login';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
             <Route path="/" element={<Main/>}/>
             <Route path="/engineering" element={<Engneering/>}/>
             <Route path="/course" element={<Course/>}/>
             <Route path="/login" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
