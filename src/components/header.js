import React from 'react';
import styles from '../styles';
import ScrollHide from './ScrollHide';
import logoImg from '../images/logo-mra.png';

const header = {
	position: 'fixed',
	display: 'flex',
	zIndex: '2',
	justifyContent: 'space-between',
	background: 'rgba(255, 255, 255, .86)',
	backdropFiler: 'blur(3px)',
	height: '58px',
	width: '100%',
	maxWidth: styles.appMaxWidth,
	transition:
		'transform .2s ease-in-out, opacity 350ms cubic-bezier(0.08, 0.69, 0.2, 0.99)',

	'.logo': {
		padding: '11px 0 0 16px',
		height: '50px',

		img: {
			height: '100%',
			width: 'auto'
		},
	}
};

const Header = ({zoomedImgId}) => (
	<ScrollHide stopHideY={20} render={isVisible => (
		<header css={{
				...header,
				transform: `translateY(${isVisible ? '0' : '-' + header.height})`,
				opacity: zoomedImgId ? '0' : '1'
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

export default Header;
