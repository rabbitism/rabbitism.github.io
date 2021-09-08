import React, { createContext, useState } from 'react';
import './App.css';
import LeftMenu from './pages/LeftMenu';
import MainContentPage from './pages/MainContentPage';
import { Banner } from './pages/Banner';
import { BrowserRouter as Router } from 'react-router-dom';
import { Flex, FlexItem, Text } from '@fluentui/react-northstar';


export const App: React.FunctionComponent = () => {
  return (
    <Router>
      <div className='header'>
        <Banner></Banner>
      </div>
      <div className='nav-container'>
        <nav>
          <LeftMenu />
        </nav>
      </div>

      <div className='content'>
        <div style={{flex: '1 1 0%'}} >
          <MainContentPage ></MainContentPage>
        </div>

      </div>

      <div className='footer'>
        <Text>©Dong Bin aka Rabbitism. All Rights Reserved</Text>
      </div>



    </Router>

  );
};
