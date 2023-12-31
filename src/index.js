import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import {RecipeProvider} from './context/RecipeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecipeProvider>
      <Router>
        <App />
      </Router>
    </RecipeProvider>
  </React.StrictMode>
);


