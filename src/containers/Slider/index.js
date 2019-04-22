import * as React from 'react';
import SliderWrapper from './Styles';

export default class Slider extends React.Component {
	render() {
		return (
			<SliderWrapper>
				<div className="peragraph">
					<div className="heading-group">
						<h2 className="heading">
							A creative agency Specialized <br /> in Brand Strtegy And design
						</h2>
						<div>
							<p className="pera">Introducing the best practices from the world’s top design leaders</p>
						</div>
					</div>
				</div>
			</SliderWrapper>
		);
	}
}
