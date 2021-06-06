import React from 'react';
import { Nav, INavStyles, INavLinkGroup, initializeIcons } from '@fluentui/react';
import { withRouter } from 'react-router-dom';


const navStyles: Partial<INavStyles> = {
  root: {
    height: '100vh',
    boxSizing: 'border-box',
    border: '1px solid #eee',
  },
};

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'Home',
        url: '/',
        key:'home',
        target: '_blank',
      },
      {
        name: 'Projects',
        url: '/projects',
        key: 'projects',
        isExpanded: true,
        expandAriaLabel: 'Expand Home section',
        collapseAriaLabel: 'Collapse Home section',
        links:[
          {
            name: 'Open Source',
            url:'projects/opensource',
            key:'opensource',
            target: '_blank'
          },
        ]
      },
      {
        name: 'About Me2',
        url: '/about',
        key: 'about',
        target: '_blank',
        
      }
    ],
  },
];



class LeftMenu extends React.Component<any, any> {

  render() {

    const { history } = this.props;

    initializeIcons();


    return (
      <Nav
        onLinkClick={(ev, item) => {ev?.preventDefault(); history.push(item?.url ?? '/') }}
        selectedKey="key3"
        ariaLabel="Nav basic example"
        styles={navStyles}
        groups={navLinkGroups}
      />
    );
  }
}



export default withRouter(LeftMenu);