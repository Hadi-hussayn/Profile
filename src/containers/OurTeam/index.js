import React from 'react';
import { Row, Col } from 'antd';
import OurTem from './styles';

class OurTeam extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<OurTeam>
				<div>
					<Row>
						<Col spane={24}>
							<h2>Our Team</h2>
							<p>
								Ex mei reformidans ancillae delicata, est amet dolor lobortis id, per no sadipscing
								persequeris sea ludus eirmod usu sint dicunt
							</p>
						</Col>
					</Row>
				</div>
				<div>
					<row>
						<col />
					</row>
				</div>
			</OurTeam>
		);
	}
}

export default OurTeam;
