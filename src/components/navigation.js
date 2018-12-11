import React, { Component } from 'react';
import styles from '../styles'
import NavLinks from './NavLinks';

const navWrapper = {
	position: 'fixed',
	display: 'flex',
	justifyContent: 'flex-end',
	width: '100%',
	maxWidth: styles.appMaxWidth,
	margin: '0 auto',
	padding: '70px 0',
	top: '0',
	right: '0',
	left: '0',
	bottom: '0',
}
const nav = {
	zIndex: '0',
	width: '240px',
	height: '100%',
	transition: styles.transform,
}

class Navigation extends Component {
	render() {
		const { isNavOpen, toggleNav } = this.props;
		return (
			<div css={navWrapper}>
				<nav
					css={{
						...nav,
						transform: `translatex(${isNavOpen ? '0' : '100px'})`,
					}}
				>
					<NavLinks
						isNavOpen={isNavOpen}
						toggleNav={toggleNav}
					/>
				</nav>
			</div>
		);
	}
}

export default Navigation;
