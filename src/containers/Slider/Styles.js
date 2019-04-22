import styled from 'styled-components';

import Background from '../../imgs/hero-classic.jpg';

const SliderWrapper = styled.div`
	height: 100vh;
	width: 100%;
	position: relative;
	background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${Background});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	align-items: center;
	text-align: center;
	justify-content: center;
	.peragraph {
		display: flex;
		justify-content: center;
		text-align: center;
	}
	.heading-group {
		position: relative;
	}
	.heading {
		font-family: 'Lato', sans-serif;
		color: #fff;
		font-size: 3rem;
	}
	.pera {
		font-family: 'PT Sans Narrow', sans-serif;
		letter-spacing: 2px;
		color: #fff;
		font-size: 17px;
	}
`;

export default SliderWrapper;
