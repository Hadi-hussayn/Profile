import React from 'react';
import { Icon } from 'antd';
import Wrapper from './StyleIcon';

export const Icons = (props) => {
	return (
		<Wrapper>
			<ul className="list-type">
				<li style={{ listStyle: 'none' }}>
					<Icon type="check-circle" />
					{props.title}
				</li>
				<li style={{ listStyle: 'none' }}>
					<Icon type="check-circle" />
					{props.title}
				</li>
				<li style={{ listStyle: 'none' }}>
					<Icon type="check-circle" />
					{props.title}
				</li>
			</ul>
		</Wrapper>
	);
};
