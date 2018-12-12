import React, { Component } from 'react';
import { Route } from "react-router-dom";
import styles from './styles'
import Header from './components/Header';
import ViewToggle from './components/ViewToggle';
import Navigation from './components/Navigation';
import Main from './components/Main';
import DirectionToggles from './components/DirectionToggles';
import './App.less';

const app = {
	maxWidth: styles.appMaxWidth,
	margin: '0 auto',
}

class App extends Component {
	state = {
		isNavOpen: false,
		isZoomed: false
	};

	handleToggleZoom = (zoomState) => {
		this.setState({isZoomed: zoomState})
	}

	handleToggleNav = () => {
		this.setState({ isNavOpen: !this.state.isNavOpen })
	}

	render() {
		const {  isNavOpen, isZoomed } = this.state;

		return (
			<div css={app}>
				<Header
					isZoomed={isZoomed}
				/>
				<ViewToggle
					togglenav={this.handleToggleNav}
					togglezoom={this.handleToggleZoom}
					isNavOpen={isNavOpen}
					isZoomed={isZoomed}
				/>
				<Navigation
					toggleNav={this.handleToggleNav}
					isNavOpen={isNavOpen}
				/>
				<Route
					render={props =>
						<Main
						{...props}
						togglezoom={this.handleToggleZoom}
						toggleNav={this.handleToggleNav}
						isNavOpen={isNavOpen}
						isZoomed={isZoomed}
						/>
					}
				/>
				<DirectionToggles
					isZoomed={isZoomed}
					isNavOpen={isNavOpen}
				/>
			</div>
		);
	}
}

export default App;
