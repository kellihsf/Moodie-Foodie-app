import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import ButtonAppBar from './views/Toolbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ButtonAppBar /> */}
    <App />
  </React.StrictMode>
  
);

reportWebVitals();
