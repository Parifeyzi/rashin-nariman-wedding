import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import AppEn from './AppEn'; 
import './index.css';
import 'leaflet/dist/leaflet.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/en" element={<AppEn />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
