import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot instead of ReactDOM.render
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root'); // Get the root container
const root = createRoot(container); // Create a root using the new API

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
