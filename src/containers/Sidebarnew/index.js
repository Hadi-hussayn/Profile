// import React from 'react';
// // import { SidebarIcon } from '../../components/Elements/icons/index';
// import Wrapper from './sidebarNewStyle';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import About from '../About us/index';
// import Features from '../Features/index';

// import Services from '../Services';
// import Company from '../Company';

// import OurTeam from '../OurTeam';

// export default class SideNavigation extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			visible: false
// 		};
// 	}

// 	handleSidebar = () => {
// 		this.setState({ visible: !this.state.visible });
// 	};

// 	render() {
// 		const { visible } = this.state;
// 		return (
// 			<Wrapper>
// 				<Router>
// 					<div className="flexGrid">
// 						<ul className="iconsBar">
// 							<li>
// 								<Link to="/" />
// 							</li>
// 							<li>
// 								<Link to="/about" />

// 								<SIcon StyleImg={{ height: '32px', padding: '0 0 15px 0' }} title="Facts" />
// 							</li>
// 							<Link to="/feature">
// 								<li />
// 							</Link>
// 							<Link to="/service">
// 								<li />
// 							</Link>
// 							<Link to="/team">
// 								<li />
// 							</Link>
// 							<Link to="/company">
// 								<li />
// 							</Link>
// 							<Link to="/facts">
// 								<li />
// 							</Link>
// 							<div className="setting_icons">
// 								<Link to="/profile_add">
// 									<li />
// 								</Link>
// 								<Link to="/creator">
// 									<li />
// 								</Link>
// 							</div>
// 						</ul>
// 						<div className="collapse" className={visible ? 'slideOff' : 'slideOn'}>
// 							<div className={visible ? 'routeDisable' : 'sidebarRouteArea'} />
// 							<div onClick={this.handleSidebar} className="slideButton">
// 								{this.state.visible ? (
// 									<SidebarIcon IconType="Icns fas fa-angle-right" />
// 								) : (
// 									<SidebarIcon IconType="Icns fas fa-angle-left" />
// 								)}
// 							</div>
// 						</div>
// 						<div className={`content-area ${this.state.visible ? 'containerRelease' : 'containerShrink'}`}>
// 							{/* <Route exact path="/" component={CrearorConsole} /> */}
// 							<Route exact path="/about" component={About} />
// 							<Route exact path="/feature" component={Features} />
// 							<Route exact path="/service" component={Services} />
// 							<Route exact path="/team" component={OurTeam} />
// 							<Route exact path="/company" component={Company} />
// 						</div>
// 					</div>
// 				</Router>
// 			</Wrapper>
// 		);
// 	}
// }
