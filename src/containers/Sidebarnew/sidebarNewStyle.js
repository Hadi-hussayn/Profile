import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	background: #e7f0f4;

	.flexGrid {
		display: flex;
	}

	.iconsBar {
		background: #34435a;
		height: 100vh;
		position: relative;
		width: 60px;
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 0;
		z-index: 1;
	}

	.iconsBar li {
		list-style: none;
		justify-content: center;
		margin: 0px 0;
		border-radius: 5px;
	}

	.iconsBar li a,
	.iconsBar li a:hover,
	.iconsBar li a:active,
	.iconsBar li a:focus {
		text-decoration: none;
	}

	.slideOn {
		width: 300px;
		transition: 0.4s all ease-in-out;
		background: #475369;
		height: 100vh;
		position: relative;
		top: 0;
		left: 0;
		z-index: 0;
	}

	.slideOff {
		width: 0;
		-webkit-transition: 0.4s all ease-in-out;
		transition: 0.4s all ease-in-out;
		background: #475369;
		height: 100vh;
		position: relative;
		top: 0;
		z-index: 0;
	}

	.collapse {
		position: relative;
		z-index: -1;
	}

	.routeDisable {
		position: relative;
		left: -250px;
		transition: 0.4s all ease-in-out;
		padding: 24px 12px;
		height: 100vh;
	}
	.sidebarRouteArea {
		position: relative;
		left: 0;
		transition: 0.4s all ease-in-out;
		height: 100vh;
		padding: 24px 12px;
	}
	#scroll {
		overflow-y: scroll;
		overflow-x: hidden;
		height: 100%;
	}
	#scroll::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		border-radius: 10px;
	}

	#scroll::-webkit-scrollbar {
		width: 2px;
		background-color: #909cab;
	}

	#scroll::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
		background-color: #26c585;
	}

	.slideButton {
		position: absolute;
		right: -20px;
		top: 35vh;
		cursor: pointer;
	}

	.content-area {
		padding: 0 16px;
		height: 100vh;
		overflow-y: scroll;
	}

	.containerShrink {
		width: 74%;
		transition: 0.4s all ease-in-out;
		text-align: -webkit-auto;
	}

	.containerRelease {
		width: 100%;
		transition: 0.4s all ease-in-out;
		text-align: -webkit-auto;
	}

	.Profile_button {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		position: relative;

		&:after {
			content: "";
			position: absolute;
			left: 50%;
			top: 0;
			bottom: 0;
			height: 100%;
			width: 1px;
			background: #717a86;
		}
	}

	.Profile_form {
		text-align: left;
		width: 98%;
		margin-top: 15px;
	}
	.study-wrapper {
		margin-right: 12px;
	}
	.setting_icons {
		bottom: 0;
		position: absolute;
	}
	.btn {
		padding-left: 16px;
		padding-right: 16px;
	}
	.study-btn {
		margin-top: 2rem;
	}
	.img {
		margin-left: 5px;
	}
	.checkbox {
		text-align: left;
	}
	.checkbox [type="radio"]:checked,
	[type="radio"]:not(:checked) {
		position: absolute;
		left: -9999px;
	}
	[type="radio"]:checked + label,
	[type="radio"]:not(:checked) + label {
		position: relative;
		padding-left: 28px;
		cursor: pointer;
		line-height: 20px;
		display: inline-block;
		color: #cccbcb;
		font-size: 14px;
	}
	[type="radio"]:checked + label:before,
	[type="radio"]:not(:checked) + label:before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 17px;
		height: 18px;
		border: 1px solid #ddd;
		border-radius: 100%;
		background: #475369;
	}
	[type="radio"]:checked + label:after,
	[type="radio"]:not(:checked) + label:after {
		content: '';
		width: 9px;
		height: 8px;
		background: #ffffff;
		position: absolute;
		top: 5px;
		left: 4px;
		border-radius: 100%;
		-webkit-transition: all 0.2s ease;
		transition: all 0.2s ease;
	}
	[type="radio"]:not(:checked) + label:after {
		opacity: 0;
		-webkit-transform: scale(0);
		transform: scale(0);
	}
	[type="radio"]:checked + label:after {
		opacity: 1;
		-webkit-transform: scale(1);
		transform: scale(1);
	}
`;
export default Wrapper;
