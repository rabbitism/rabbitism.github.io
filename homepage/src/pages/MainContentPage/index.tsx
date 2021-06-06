import { Label } from 'office-ui-fabric-react';
import React from 'react';
import { Route, BrowserRouter as Router, Switch, withRouter } from 'react-router-dom';
import { Homepage } from '../Homepage';

class MainContentPage extends React.Component<any, any> {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path='/'><Homepage></Homepage></Route>
            <Route path='/projects'><Label>Projects</Label></Route>
          </Switch>
      </div>
    )
  }
}

export default MainContentPage;