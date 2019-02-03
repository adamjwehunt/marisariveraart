import React from 'react';
import { Link } from 'react-router-dom';
import instagramImg from '../images/icon-instagram.svg';

const linksWrapper = {
	width: '100%',
	fontWeight: '400',
	fontStyle: 'normal',
	fontSize: '15px',
	letterSpacing: '2.86px',
	textTransform: 'lowercase',
	lineHeight: '1.25em',
	transition: 'opacity .2s 0s ease-in-out',

	ul: {
		textAlign: 'left',
		'&.main': { marginBottom: '25px' },

		li: {
			padding: '0 40px',

			a: {
				display: 'inline-block',
				padding: '15px 0',

				img: {
					height: '15px',
					width: '15px',
				},
			},
		},
	},
};

const NavLinks = ({ onToggleNav, isNavOpen }) => (
	<div
		css={{
			...linksWrapper,
			opacity: `${isNavOpen ? '1' : '0'}`,
		}}
	>
		<ul className="main">
			<li>
				<Link to="/" onClick={onToggleNav}>
					Gallery
				</Link>
			</li>
			<li>
				<Link to="/shop" onClick={onToggleNav}>
					Shop
				</Link>
			</li>
		</ul>

		<ul className="social">
			<li>
				<Link to="/contact" onClick={onToggleNav}>
					Contact
				</Link>
			</li>
			<li>
				<Link to="/about" onClick={onToggleNav}>
					About
				</Link>
			</li>
			<li>
				<a
					href="https://www.instagram.com/marisariveraart/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={instagramImg} alt="Instagram" />
				</a>
			</li>
		</ul>
	</div>
);

export default NavLinks;
