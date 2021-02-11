import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';

ReactDOM.render(
  <React.StrictMode>
    <PortfolioPage initialDarkMode={localStorage.getItem('darkMode') === 'true'} />
  </React.StrictMode>,
  document.getElementById('root')
);
