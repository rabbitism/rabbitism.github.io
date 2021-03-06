import React from 'react';
import { withRouter } from 'react-router-dom';
import {Menu, MenuItemProps, MenuShorthandKinds, ShorthandCollection} from '@fluentui/react-northstar';





class LeftMenu extends React.Component<any, any> {


  render() {

    const { history } = this.props;

    const items: ShorthandCollection<MenuItemProps, MenuShorthandKinds> = [
      {
        key: 'home',
        content: 'Home',
        onClick: ()=> history.push('/')
      },
      {
        key: 'projects',
        content: 'Projects',
        onClick: ()=> history.push('/projects')
      },
      {
        key: 'events',
        content: 'Upcoming Events',
      },
    ]


    return (
      <Menu items={items} vertical pointing style={{width:300}}></Menu>
    );
  }
}



export default withRouter(LeftMenu);