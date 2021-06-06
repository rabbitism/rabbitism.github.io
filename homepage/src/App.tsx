import React from 'react';
import { IStyleSet, ILabelStyles, Stack, FontWeights, IStackTokens } from '@fluentui/react';
import logo from './logo.svg';
import './App.css';
import { Card } from '@fluentui/react-cards';
import LeftMenu from './pages/LeftMenu';
import MainContentPage from './pages/MainContentPage';
import { BrowserRouter as Router } from 'react-router-dom';

const boldStyle = { root: { fontWeight: FontWeights.semibold } };
const stackTokens: IStackTokens = { childrenGap: 15 };
const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
  root: { marginTop: 10 },
};


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
