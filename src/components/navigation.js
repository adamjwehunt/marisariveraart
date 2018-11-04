import React, { Component } from 'react';
import NavLinks from './NavLinks';

const nav = {
	position: 'fixed',
	padding: '70px 0',
	top: '0',
	right: '0',
	bottom: '0',
	zIndex: '0',
	width: '240px',
}

class Navigation extends Component {
	render() {
		const { isNavOpen, toggleNav } = this.props;
		return (
			<nav
				css={nav}
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
