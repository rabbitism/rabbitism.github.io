import React from 'react';
import {IStyleSet, ILabelStyles, Label, Stack, Text, Link, FontWeights, IStackTokens, Pivot, PivotItem } from '@fluentui/react';
import logo from './logo.svg';
import './App.css';
import { Card } from '@fluentui/react-cards';

const boldStyle = { root: { fontWeight: FontWeights.semibold } };
const stackTokens: IStackTokens = { childrenGap: 15 };
const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
  root: { marginTop: 10 },
};


export const App: React.FunctionComponent = () => {
  return (
    <Pivot aria-label="Basic Pivot Example">
      <PivotItem
        headerText="My Files"
        headerButtonProps={{
          'data-order': 1,
          'data-title': 'My Files Title',
        }}
      >
        <Card>
          <Label styles={labelStyles}>Hello</Label>
        </Card>
      </PivotItem>
      <PivotItem headerText="Recent">
        <Label styles={labelStyles}>Pivot #2</Label>
      </PivotItem>
      <PivotItem headerText="Shared with me">
        <Label styles={labelStyles}>Pivot #3</Label>
      </PivotItem>
    </Pivot>
  );
};
