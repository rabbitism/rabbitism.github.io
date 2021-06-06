import React from 'react';
import {Stack} from '@fluentui/react';
import './App.css';
import LeftMenu from './pages/LeftMenu';
import MainContentPage from './pages/MainContentPage';
import { BrowserRouter as Router } from 'react-router-dom';


export const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Stack horizontal disableShrink>
      <LeftMenu />
      <div>
        <MainContentPage></MainContentPage>
      </div>
      </Stack>
    </Router>

  );
};
