import * as React from 'react';
import { FeaturesWrapper, DefaultIcon } from './styles';
// import { Icon } from 'antd';
import { Col, Row } from 'antd';
import { Cards } from '../../components/card';

export default class Features extends React.Component {
	render() {
		return (
			<FeaturesWrapper>
				<Row style={{ margin: '0 9rem 0 9rem' }}>
					{/* <div className="cards"> */}
					<Col md={8} lg={8}>
						<Cards
							title="Unique Design"
							para="Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectet adipisicing elit. Aspe lore Lorem ipsum dolor sit amet, consectet adipisicing elit. Aspe elit. Aspe lore"
						/>
					</Col>
					<Col md={8} lg={8}>
						<Cards
							title="Unique Design"
							para="Lorem ipsum dolor sit Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectet adipisicing elit. Aspe lore Lorem ipsum dolor sit amet, consectet "
						/>
					</Col>
					<Col md={8} lg={8}>
						<Cards
							title="Unique Design"
							para="Lorem ipsum dolor sitLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectet adipisicing elit. Aspe lore Lorem ipsum dolor sit amet, consectet adipisicing elit. Aspe lore cons"
						/>
					</Col>
				</Row>
				<Row style={{ margin: '0 9rem 0 9rem' }}>
					<Col md={8} lg={8}>
						<Cards
							title="Unique Design"
							para="Lorem ipsum dolorLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectet adipisicing elit. Aspe lore Lorem ipsum dolor sit amet, consectet adipisi consectet adipisi "
						/>
					</Col>
					<Col md={8} lg={8}>
						<Cards
							title="Unique Design"
							para="Lorem ipsum dolorLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectet adipisicing elit. Aspe lore Lorem ipsum dolor sit amet, consectet adipisi"
						/>
					</Col>
					<Col md={8} lg={8}>
						<Cards
							title="Unique Design"
							para="Lorem ipsum dolorLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectet adipisicing elit. Aspe lore Lorem ipsum dolor sit amet, consectet adip"
						/>
					</Col>
				</Row>
			</FeaturesWrapper>
		);
	}
}
