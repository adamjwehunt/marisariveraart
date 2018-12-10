import React, { Component } from 'react';
import { Route } from "react-router-dom";
import styles from '../styles'
import Gallery from './Gallery';
import About from './About';
import Faq from './Faq';
import Blog from './Blog';
import Shop from './Shop';
import Contact from './Contact';

const main = {
	position: 'relative',
	padding: '64px 10px',
	width: '100%',
	zIndex: '1',
	background: 'white',
	transition: styles.transform,
}

class Main extends Component {
	render() {
		const { isNavOpen, toggleNav, togglezoom, isZoomed } = this.props;

		return (
			<main
				onClick={isNavOpen ? toggleNav : null}
				css={{
				...main,
					transform: isNavOpen ? 'translate(-240px,0)' : 'initial',
				}}
			>
				<Route
					exact
					path="/"
					render={() =>
						<Gallery 
							isNavOpen={isNavOpen}
							togglezoom={togglezoom}
							isZoomed={isZoomed}
						/>}
				/>
				<Route path="/about" component={About} />
				<Route path="/faq" component={Faq} />
				<Route path="/blog" component={Blog} />
				<Route path="/shop" component={Shop} />
				<Route path="/contact" component={Contact} />
			</main>
		);
	}
}

export default Main;
