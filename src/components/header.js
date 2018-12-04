import React, { Component } from 'react';
import ScrollHide from './ScrollHide';
import logoImg from '../images/logo-mra.png';

const header = {
	position: 'fixed',
	display: 'flex',
	zIndex: '2',
	justifyContent: 'space-between',
	background: 'white',
	height: '50px',
	width: '100%',
	transition:
		'transform .2s ease-in-out, opacity 350ms cubic-bezier(0.08, 0.69, 0.2, 0.99)',

	'.logo': {
		padding: '8px',
		height: '50px',

		img: {
			height: '100%',
			width: 'auto'
		},
	}
};

class Header extends Component {
	render() {
		const { isZoomed } = this.props;

		return (
				<ScrollHide render={isVisible => (
					<header css={{
							...header,
							transform: `translateY(${isVisible ? '0' : '-' + header.height})`,
							opacity: isZoomed ? '0' : '100%'
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
				)}/>
		);
	}
}

export default Header;
