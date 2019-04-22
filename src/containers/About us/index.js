import React from 'react';
import AboutWrapper from './Styles';
import AboutImg1 from '../../imgs/teamwork.jpg';
import AboutImg2 from '../../imgs/teamwork.jpg';
import { Card, Col, Row } from 'antd';

export default class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<AboutWrapper>
				<h2 className="heading"> About Us</h2>
				<p className="pera">
					Ex mei reformidans ancillae delicata, est amet dolor lobortis id, per no <br /> sadipscing
					persequeris sea ludus eirmod usu sint dicunt
				</p>
				<div className="div">
					<Row gutter={20} type="flex" style={{ margin: '0' }}>
						<Col span={12}>
							<img src={AboutImg2} alt="img" style={{ width: '100%', height: 'auto' }} />
						</Col>
						<Col span={12}>
							<img src={AboutImg1} alt="img" style={{ width: '100%', height: 'auto' }} />
						</Col>
					</Row>
				</div>
				<div style={{ padding: '30px' }}>
					<Row gutter={16}>
						<Col span={8}>
							<div className="card-one">
								<p className="peraOne">Original idias</p>
								<h2 className="heading-1">Testing for perfection</h2>
								<p className="peraTwo">
									Lorem ipsum dolor sit amet, consectet adipisicing. Adipisci aliquid beat commodi
									consectetur corporis cumque, deleniti doloribus facere fugiat
								</p>
							</div>
						</Col>
						<Col span={8}>
							<div className="card-one">
								<p className="peraOne">Graphic designs</p>
								<h2 className="heading-1">Handcrafted Templates</h2>
								<p className="peraTwo">
									Lorem ipsum dolor sit amet, consectet adipisicing. Adipisci aliquid beat commodi
									consectetur corporis cumque, deleniti doloribus facere fugiat
								</p>
							</div>
						</Col>
						<Col span={8}>
							<div className="card-one">
								<p className="peraOne">SEO marketing </p>
								<h2 className="heading-1">Discussion of the Idea</h2>
								<p className="peraTwo">
									Lorem ipsum dolor sit amet, consectet adipisicing. Adipisci aliquid beat commodi
									consectetur corporis cumque, deleniti doloribus facere fugiat
								</p>
							</div>
						</Col>
					</Row>
				</div>
			</AboutWrapper>
		);
	}
}
