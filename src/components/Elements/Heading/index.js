import React from 'react';
import { Wrapper } from './styles';

export const Heading = (props) => {
	return (
		<Wrapper>
			<h4 className="heading"> {props.heading}</h4>
		</Wrapper>
	);
};
