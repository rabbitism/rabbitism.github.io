import React from 'react';
import { withRouter } from 'react-router-dom';
import { ComponentEventHandler, Menu, MenuItemProps, MenuProps, MenuShorthandKinds, ShorthandCollection } from '@fluentui/react-northstar';
import MenuConfig from '../../models/MenuConfig';
import menuConfigData from '../../files/menuConfig.json';


interface MenuState {
  menuItems: ShorthandCollection<MenuItemProps, MenuShorthandKinds>;
  activeIndex: number;
}

class LeftMenu extends React.Component<any, MenuState> {

  /**
   *
   */
  constructor(props: any) {
    super(props);
    this.state = {
      menuItems: [],
      activeIndex: -1,
    }
  }

  componentDidMount() {
    const { history } = this.props;
    var configs = menuConfigData as Array<MenuConfig>;
    var items: ShorthandCollection<MenuItemProps, MenuShorthandKinds> = [];
    configs.forEach(a => {
      items.push({
        key: a.key,
        content: a.content,
        index: a.index,
        onClick: () => { history.push(a.path); this.setState({ activeIndex: a.index }) }
      })
    })
    this.setState({
      menuItems: items
    })
    var path: string = document.location.pathname;
    var segments = path.split('/');
    if (segments.length >= 2) {
      var index : number|undefined = configs.find(a=>a.path==='/'+segments[1])?.index
      if(index == null){
        this.setState({activeIndex: 0});
      }
      else{
        this.setState({activeIndex: index});
      }
    }
  }

  onActiveIndexChanged = (a: any) => {
    console.log(a)

  }


  render() {


    return (
      <div style={{ alignItems: 'center' }}>
        <Menu items={this.state.menuItems} underlined primary activeIndex={this.state.activeIndex} ></Menu>

      </div>

    );
  }
}



export default withRouter(LeftMenu);