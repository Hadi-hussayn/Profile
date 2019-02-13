import React from "react";
import HeaderWrapper from "./styles";
import { Menu, Icon } from "antd";
import "antd/dist/antd.css";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export class DefaultHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }
  render() {
    return (
      <HeaderWrapper>
        
       <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Icon type="" />Home
        </Menu.Item>
        {/* <Menu.Item key="app" disabled>
          <Icon type="appstore" />Navigation Two
        </Menu.Item> */}
        <SubMenu title={<span className="submenu-title-wrapper"><Icon type=""/>List</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
        </Menu.Item>
      </Menu>
        
      </HeaderWrapper>
    );
  }
}

export default DefaultHeader;
