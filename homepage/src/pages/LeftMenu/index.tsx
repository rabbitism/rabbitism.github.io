import React from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, MenuItemProps, MenuShorthandKinds, ShorthandCollection } from '@fluentui/react-northstar';
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
    var segments = this.getSegments()
    if (segments.length >= 2) {
      this.setActiveIndex(segments[1]);
    }

    history.listen((location: any, action: any)=>{
      var segments = this.getSegments()
      if (segments.length >= 2) {
        this.setActiveIndex(segments[1]);
      }
    })
  }

  public getSegments = () =>{
    var path: string = document.location.pathname;
    var segments = path.split('/');
    return segments
  }

  public setActiveIndex = (path: string) => {
    var configs = menuConfigData as Array<MenuConfig>;
    var index : number|undefined = configs.find(a=>a.path==='/' + path)?.index
    if(index == null){
      this.setState({activeIndex: 0});
    }
    else{
      this.setState({activeIndex: index});
    }
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