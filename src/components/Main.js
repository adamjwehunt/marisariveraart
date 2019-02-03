import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from '../styles';
// import Splash from './Splash';
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
};

const Main = ({ isNavOpen, onToggleNav, onSetActiveArt, activeArtId }) => (
	<main
		onClick={isNavOpen ? onToggleNav : undefined}
		css={{
			...main,
			transform: isNavOpen ? 'translate(-240px,0)' : 'initial',
		}}
	>
		<Switch>
			{/* <Route path="/" component={Splash} /> */}
			<Route
				path="/:imgId"
				render={router => {
					return (
						<Gallery
							onSetActiveArt={onSetActiveArt}
							activeArtId={activeArtId}
							isNavOpen={isNavOpen}
							router={router}
						/>
					);
				}}
			/>
			<Route
				exact
				path="/"
				render={router => {
					return (
						<Gallery
							onSetActiveArt={onSetActiveArt}
							activeArtId={activeArtId}
							isNavOpen={isNavOpen}
							router={router}
						/>
					);
				}}
			/>
			<Route path="/about" component={About} />
			<Route path="/faq" component={Faq} />
			<Route path="/blog" component={Blog} />
			<Route path="/shop" component={Shop} />
			<Route path="/contact" component={Contact} />
		</Switch>
	</main>
);

export default Main;
