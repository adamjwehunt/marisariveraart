import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Gallery from './Gallery';
import About from './About';
import Faq from './Faq';
import Blog from './Blog';
import Shop from './Shop';
import Contact from './Contact';

const main = {
	padding: '60px 10px',
	zIndex: '1',
	background: 'white',
	transition: "all .2s 0s ease-in-out",
}

class Main extends Component {
	render() {
		const { isNavOpen, toggleNav } = this.props;

		return (
			<main
				onClick={isNavOpen ? toggleNav : null}
				css={{
				...main,
					transform: `translate(${isNavOpen ? '-240px' : '0'},0)`,
				}}
			>
					<Route exact path="/" component={Gallery} />
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
