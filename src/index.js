import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './components/Header/Header';
import NewArrival from './components/NewArrival/NewArrival';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
    <Home/>
    <NewArrival/>
  </React.StrictMode>,
);
