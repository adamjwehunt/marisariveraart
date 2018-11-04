import React, { Component } from 'react';
import logoImg from '../images/logo-mra.png';

const header = {
	position: 'fixed',
	display: 'flex',
	zIndex: '2',
	justifyContent: 'space-between',
	background: 'white',
	height: '60px',
	width: '100%',
	transition: 'transform 120ms ease-in-out',

	'.logo': {
		padding: '8px',
		height: '60px',

		img: {
			height: '100%',
			width: 'auto'
		},
	}
};

class Header extends Component {

	render() {
		const { isVisible } = this.props;

		return (
				<header css={{
						...header,
						transform: `translateY(${isVisible ? '0' : '-' + header.height})`
					}}
				>
					<div
						className='logo'
					>
						<img
							src={logoImg}
							alt="Marisa River Art Logo"
						/>
					</div>
				</header>
		);
	}
}

export default Header;
