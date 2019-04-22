import React, { Component } from 'react';
import AppWrapper from './appcss';
import { Layout } from 'antd';
import Slider from './containers/Slider';
import About from './containers/About us';
import Features from './containers/Features';
import Services from './containers/Services';
import Company from './containers/Company';
import Sidebar from './containers/Sidebar';

// import IconDefault from "./components/Elements/icons/icon";

import SideNavigation from './containers/Sidebarnew/index';

const { Sider, Content } = Layout;

class App extends Component {
	render() {
		return (
			<Layout>
				{/* <SideNavigation /> */}
				<Slider />
				<About />
				<Features />
				<Services />
				<Company />
			</Layout>
		);
	}
}
export default App;
