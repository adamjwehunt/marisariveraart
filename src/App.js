import React, { Fragment, Component } from 'react';
import Header from './components/Header';
import ViewToggle from './components/ViewToggle';
import Navigation from './components/Navigation';
import Main from './components/Main';
import './App.less';

class App extends Component {
	state = {
		isFullscreen: false,
		lastScrollTop: 0,
		hasScrolled: false,
		isNavOpen: false,
	};

	componentWillMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	checkY = () => {
		const pageY= window.scrollY;
		const lastScrollTop = this.state.lastScrollTop;
		const downTolerance = 8;

		if (pageY > (lastScrollTop + downTolerance)) {
			this.setState({ isFullscreen: true })
		} else if (pageY < lastScrollTop || pageY <= 0) {
			this.setState({ isFullscreen: false })
		}

		this.setState({
			lastScrollTop: pageY,
			hasScrolled: false,
		});
	};

	handleScroll = () => {
		if (!this.state.hasScrolled) {
			window.requestAnimationFrame(this.checkY);
		} else {
			this.setState({ hasScrolled: true })
			window.requestAnimationFrame(this.handleScroll);
		}
	};

	toggleNav = () => {
		this.setState({isNavOpen: !this.state.isNavOpen})
	}

	render() {
		const { isFullscreen, isNavOpen} = this.state;

		return (
			<Fragment>
				<Header
					isVisible={!isFullscreen && !isNavOpen}
				/>
				<ViewToggle
					isVisible={!isFullscreen || isNavOpen}
					isNavOpen={isNavOpen}
					toggleNav={this.toggleNav}
				/>
				<Navigation
					toggleNav={this.toggleNav}
					isNavOpen={isNavOpen}
				/>
				<Main
					toggleNav={this.toggleNav}
					isNavOpen={isNavOpen}
				/>
			</Fragment>
		);
	}
}

export default App;
