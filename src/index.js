import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TripsProvider } from './hooks/useTrips';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TripsProvider>
      <App />
    </TripsProvider>
  </React.StrictMode>
);
