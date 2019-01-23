import React, {
	PureComponent
} from 'react';
import {
	Route
} from "react-router-dom";
import styles from './styles'
import Header from './components/header';
import ViewToggle from './components/ViewToggle';
import Navigation from './components/navigation';
import Main from './components/Main';
// import DirectionToggles from './components/DirectionToggles';
import './App.less';

const app = {
	maxWidth: styles.appMaxWidth,
	margin: '0 auto',
}

class App extends PureComponent {
	state = {
		isNavOpen: false,
		zoomedImgId: undefined
	};

	handleToggleZoom = imgId => this.setState({
		zoomedImgId: imgId
	})

	handleToggleNav = () => this.setState({
		isNavOpen: !this.state.isNavOpen
	})

	render() {
		const {
			isNavOpen,
			zoomedImgId
		} = this.state;

		return (
			<div css={app}>
				<Header
					zoomedImgId={zoomedImgId}
				/>
				<ViewToggle
					onToggleNav={this.handleToggleNav}
					onToggleZoom={this.handleToggleZoom}
					isNavOpen={isNavOpen}
					zoomedImgId={zoomedImgId}
				/>
				<Navigation
					onToggleNav={this.handleToggleNav}
					isNavOpen={isNavOpen}
				/>
				<Route
					render={() =>
						<Main
							onToggleZoom={this.handleToggleZoom}
							onToggleNav={this.handleToggleNav}
							isNavOpen={isNavOpen}
							zoomedImgId={zoomedImgId}
						/>
					}
				/>
				{/* <DirectionToggles
					onToggleZoom={this.handleToggleZoom}
					zoomedImgId={zoomedImgId}
					isNavOpen={isNavOpen}
				/> */}
			</div>
		);
	}
}

export default App;
