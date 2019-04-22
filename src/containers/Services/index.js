import React from 'react';
import { ServicesWrapper } from './styles';
import offer from '../../imgs/offer.jpg';
import { Row, Col } from 'antd';
import { Button } from '../../components/Elements/button/Button';
import { Heading } from '../../components/Elements/Heading';
import { Icons } from '../../components/Elements/icons';

export default class Services extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<ServicesWrapper>
				<Row gutter={12} type="flex" style={{ margin: '0' }}>
					<Col span={12}>
						<img src={offer} alt="img" style={{ width: '100%', height: 'auto' }} />
					</Col>
					<Col span="12">
						<div>
							<Heading heading="Present your services with flexible, convenient and multipurpose" />
						</div>
						<Icons title="Find more creative ideas for your projects" />
						<Button>
							<Icons type="left" /> EXPLORE FEATURE{' '}
						</Button>
					</Col>
				</Row>
			</ServicesWrapper>
		);
	}
}
