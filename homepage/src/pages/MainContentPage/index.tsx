import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Homepage } from '../Homepage';
import  Projects  from '../Projects';

class MainContentPage extends React.Component<any, any> {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path='/' component={Homepage}></Route>
            <Route path='/projects' component={Projects}></Route>
            <Route component={Homepage} />
          </Switch>
      </div>
    )
  }
}

export default MainContentPage;