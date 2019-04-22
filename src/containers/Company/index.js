import React from 'react';
import CompanyWrapper from './styles';
import { Row, Col } from 'antd';

export default class Company extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<CompanyWrapper>
				<div className="">
					<Row>
						<Col span={24}>
							<div className="pera-group">
								<p className="pera">
									Beautiful and easy to use UI, professional animations and drag & drop feature
								</p>
							</div>
							<div className="button-wrapper">
								<button className="custom-button">About Company</button>
							</div>
						</Col>
					</Row>
				</div>
			</CompanyWrapper>
		);
	}
}
