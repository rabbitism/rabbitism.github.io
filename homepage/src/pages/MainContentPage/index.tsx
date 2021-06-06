import { Label } from 'office-ui-fabric-react';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Homepage } from '../Homepage';

class MainContentPage extends React.Component<any, any> {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path='/' component={Homepage}></Route>
            <Route path='/projects'><Label>Projects</Label></Route>
            <Route component={Homepage} />
          </Switch>
      </div>
    )
  }
}

export default MainContentPage;