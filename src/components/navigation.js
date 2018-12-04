import React, { Component } from 'react';
import styles from '../styles'
import NavLinks from './NavLinks';

const nav = {
	position: 'fixed',
	padding: '70px 0',
	top: '0',
	right: '0',
	bottom: '0',
	zIndex: '0',
	width: '240px',
	transition: styles.transform,
}

class Navigation extends Component {
	render() {
		const { isNavOpen, toggleNav } = this.props;
		return (
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
		);
	}
}

export default Navigation;
