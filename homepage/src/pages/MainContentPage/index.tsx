import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Homepage } from '../Homepage';
import PortfolioPage from '../Portfolio';
import  Projects  from '../Projects';
import Resume from '../Resume';

class MainContentPage extends React.Component<any, any> {
  render() {
    return (
      <div >
          <Switch>
            <Route exact path='/' component={Homepage}></Route>
            <Route path='/projects' component={Projects}></Route>
            <Route path='/portfolios' component={PortfolioPage}></Route>
            <Route path='/about' component={Resume} />
            <Route component={Homepage}></Route>
          </Switch>
      </div>
    )
  }
}

export default MainContentPage;