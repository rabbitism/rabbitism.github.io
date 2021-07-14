import React from 'react';
import './App.css';
import LeftMenu from './pages/LeftMenu';
import MainContentPage from './pages/MainContentPage';
import { BrowserRouter as Router } from 'react-router-dom';


export const App: React.FunctionComponent = () => {
  return (
    <Router>

      <LeftMenu />
      <div>
        <MainContentPage></MainContentPage>
      </div>
    </Router>

  );
};
