import React from 'react';
import { Wrapper } from './cardsStyle';

export const Cards = (props) => {
	return (
		<Wrapper>
			<div className="card">
				<h3 className="heading"> {props.title}</h3>
				<p className="para"> {props.para}</p>
			</div>
		</Wrapper>
	);
};
