import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import { errorInterceptor } from './services/ErrorInterceptor';

errorInterceptor();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
