import React from 'react';

// import IconDefault from "../../components/Elements/icons";
import SiderWrapper from './styles';
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;

class Sidebar extends React.Component {
	state = {
		collapsed: false
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed
		});
	};

	render() {
		return (
			<SiderWrapper>
				<Sider trigger={null} collapsible collapsed={this.state.collapsed}>
					<div className="logo" />
					<Menu theme="dark" mode="inline" defaultSelectedKeys={[ '1' ]}>
						<Menu.Item key="1">
							<Icon type="user" />
							<span>nav 1</span>
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="video-camera" />
							<span>nav 2</span>
						</Menu.Item>
						<Menu.Item key="3">
							<Icon type="upload" />
							<span>nav 3</span>
						</Menu.Item>
					</Menu>
				</Sider>
				<Icon
					className="trigger"
					type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
					onClick={this.toggle}
				/>
			</SiderWrapper>
		);
	}
}

export default Sidebar;
